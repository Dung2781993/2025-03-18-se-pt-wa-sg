// ClinicService.js (full implementation for clinic-related APIs)
const {
  Appointment,
  Doctor,
  Patient,
  Service,
  AppointmentService,
  Invoice,
  sequelize,
} = require("../models");
const { Op } = require("sequelize");
const redis = require("../config/redis");

module.exports = {
  async getPatientAppointments(req, res) {
    try {
      const { id } = req.params;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "Valid patient ID is required" });
      }

      const cacheKey = `appointments:patient:${id}:page:${page}:limit:${limit}`;
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        return res.json(JSON.parse(cachedData));
      }

      const { count, rows: appointments } = await Appointment.findAndCountAll({
        where: {
          patient_id: id,
          is_deleted: false,
        },
        include: [
          {
            model: Doctor,
            attributes: ["id", "name", "specialty"],
            where: { is_deleted: false },
          },
          {
            model: Patient,
            attributes: ["id", "full_name", "dob", "email", "phone"],
          },
        ],
        attributes: ["id", "scheduled_at", "status", "notes"],
        limit,
        offset,
      });

      const result = {
        total: count,
        page,
        totalPages: Math.ceil(count / limit),
        appointments,
      };

      await redisClient.setEx(cacheKey, 60, JSON.stringify(result));
      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: "Failed to retrieve patient appointments",
        details: err.message,
      });
    }
  },

  async getAppointmentServices(req, res) {
    try {
      const { id } = req.params;
      const services = await AppointmentService.findAll({
        where: { appointment_id: id, is_deleted: false },
        include: {
          model: Service,
          attributes: ["name", "price"],
        },
      });

      const result = services.map((item) => ({
        service: item.Service.name,
        quantity: item.quantity,
        unit_price: parseFloat(item.Service.price),
        total_price: item.quantity * parseFloat(item.Service.price),
      }));

      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: "Failed to get appointment services",
        details: err.message,
      });
    }
  },

  async createAppointmentWithServices(req, res) {
    const { patient_id, doctor_id, scheduled_at, services } = req.body;
    const t = await sequelize.transaction();
    try {
      const appointment = await Appointment.create(
        {
          patient_id,
          doctor_id,
          scheduled_at,
          status: "Scheduled",
          is_deleted: false,
        },
        { transaction: t }
      );

      const items = services.map((s) => ({
        appointment_id: appointment.id,
        service_id: s.service_id,
        quantity: s.quantity,
        is_deleted: false,
      }));

      await AppointmentService.bulkCreate(items, { transaction: t });
      await t.commit();

      res.status(201).json({
        message: "Appointment created",
        appointment_id: appointment.id,
      });
    } catch (err) {
      await t.rollback();
      res
        .status(500)
        .json({ error: "Failed to create appointment", details: err.message });
    }
  },

  async getInvoiceForAppointment(req, res) {
    try {
      const { id } = req.params;

      const invoice = await Invoice.findOne({ where: { appointment_id: id } });
      const items = await AppointmentService.findAll({
        where: { appointment_id: id, is_deleted: false },
        include: Service,
      });

      const services = items.map((item) => ({
        name: item.Service.name,
        qty: item.quantity,
        price: parseFloat(item.Service.price),
      }));

      const total_amount = services.reduce(
        (sum, s) => sum + s.qty * s.price,
        0
      );

      res.json({
        appointment_id: id,
        total_amount,
        status: invoice?.payment_status || "Unpaid",
        services,
      });
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to get invoice", details: err.message });
    }
  },

  async updateInvoiceStatus(req, res) {
    try {
      const { id } = req.params;
      const { payment_status, paid_at } = req.body;
      await Invoice.update({ payment_status, paid_at }, { where: { id } });
      res.json({ message: "Invoice updated" });
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to update invoice", details: err.message });
    }
  },

  async createCompleteCheckin(req, res) {
    const { patient, appointment, services } = req.body;
    const t = await sequelize.transaction();
    try {
      const newPatient = await Patient.create(patient, { transaction: t });

      const newAppointment = await Appointment.create(
        {
          ...appointment,
          patient_id: newPatient.id,
          is_deleted: false,
        },
        { transaction: t }
      );

      const serviceItems = services.map((s) => ({
        appointment_id: newAppointment.id,
        service_id: s.service_id,
        quantity: s.quantity,
        is_deleted: false,
      }));
      await AppointmentService.bulkCreate(serviceItems, { transaction: t });

      const totalAmount = services.reduce(
        (sum, s) => sum + s.price * s.quantity,
        0
      );
      await Invoice.create(
        {
          appointment_id: newAppointment.id,
          total_amount: totalAmount,
          payment_status: "Unpaid",
          is_deleted: false,
        },
        { transaction: t }
      );

      await t.commit();
      res.status(201).json({ message: "Complete check-in created" });
    } catch (err) {
      await t.rollback();
      res.status(500).json({ error: err.message });
    }
  },

  async cancelAppointment(req, res) {
    const { id } = req.params;
    const t = await sequelize.transaction();
    try {
      await Appointment.update(
        { status: "Cancelled", is_deleted: true },
        { where: { id }, transaction: t }
      );

      await AppointmentService.update(
        { is_deleted: true },
        { where: { appointment_id: id }, transaction: t }
      );

      await Invoice.update(
        { payment_status: "Voided", is_deleted: true },
        { where: { appointment_id: id }, transaction: t }
      );

      await t.commit();
      res.json({ message: "Appointment cancelled and invoice voided" });
    } catch (err) {
      await t.rollback();
      res.status(500).json({ error: err.message });
    }
  },

  async rescheduleAppointment(req, res) {
    const { id } = req.params;
    const { doctor_id, scheduled_at, services } = req.body;
    const t = await sequelize.transaction();
    try {
      await Appointment.update(
        { doctor_id, scheduled_at },
        { where: { id }, transaction: t }
      );

      await AppointmentService.destroy({
        where: { appointment_id: id },
        transaction: t,
      });

      const newServices = services.map((s) => ({
        appointment_id: id,
        service_id: s.service_id,
        quantity: s.quantity,
        is_deleted: false,
      }));

      await AppointmentService.bulkCreate(newServices, { transaction: t });
      await t.commit();

      res.json({ message: "Appointment rescheduled and services updated" });
    } catch (err) {
      await t.rollback();
      res.status(500).json({ error: err.message });
    }
  },

  async searchAppointments(req, res) {
    try {
      const { doctorName, status, startDate, endDate } = req.query;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      const where = { is_deleted: false };

      if (status) {
        where.status = status;
      }

      if (startDate && endDate) {
        where.scheduled_at = {
          [Op.between]: [new Date(startDate), new Date(endDate)],
        };
      }

      const doctorFilter = doctorName
        ? {
            model: Doctor,
            attributes: ["id", "name", "specialty"],
            where: {
              name: { [Op.like]: `%${doctorName}%` },
              is_deleted: false,
            },
          }
        : {
            model: Doctor,
            attributes: ["id", "name", "specialty"],
            where: { is_deleted: false },
          };

      const { count, rows: appointments } = await Appointment.findAndCountAll({
        where,
        include: [
          doctorFilter,
          {
            model: Patient,
            attributes: ["id", "full_name", "dob", "email", "phone"],
          },
        ],
        attributes: ["id", "scheduled_at", "status", "notes"],
        limit,
        offset,
      });

      res.json({
        total: count,
        page,
        totalPages: Math.ceil(count / limit),
        appointments,
      });
    } catch (err) {
      res.status(500).json({
        error: "Failed to search appointments",
        details: err.message,
      });
    }
  },

  async getDoctors(req, res) {
    try {
      const { specialty } = req.query;
      const cacheKey = specialty
        ? `doctors:specialty:${specialty.toLowerCase()}`
        : `doctors:all`;

      const cached = await redisClient.get(cacheKey);
      if (cached) {
        return res.json(JSON.parse(cached));
      }

      const where = { is_deleted: false };
      if (specialty) {
        where.specialty = { [Op.iLike]: `%${specialty}%` };
      }

      const doctors = await Doctor.findAll({
        where,
        attributes: ["id", "name", "specialty"],
      });

      await redisClient.setEx(cacheKey, 60, JSON.stringify(doctors)); // TTL 60s
      res.json(doctors);
    } catch (err) {
      res.status(500).json({
        error: "Failed to retrieve doctors",
        details: err.message,
      });
    }
  },
};
