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

module.exports = {
  async getPatientAppointments(req, res) {
    try {
      const { id } = req.params;
      console.log("Patient ID:", id);

      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "Valid patient ID is required" });
      }

      const appointments = await Appointment.findAll({
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
      });

      res.json(appointments);
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
      res
        .status(500)
        .json({
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

      res
        .status(201)
        .json({
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
};
