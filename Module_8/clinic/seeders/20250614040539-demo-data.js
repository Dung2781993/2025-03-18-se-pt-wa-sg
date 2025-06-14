"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    // Doctors
    const doctors = Array.from({ length: 20 }, (_, i) => ({
      name: `Dr. Test Doctor ${i + 1}`,
      specialty:
        (i + 1) % 3 === 0
          ? "General"
          : (i + 1) % 3 === 1
          ? "Cardiology"
          : "Pediatrics",
      phone: `09000000${(i + 1).toString().padStart(2, "0")}`,
      email: `doctor${i + 1}@clinic.com`,
      created_at: now,
      updated_at: now,
      is_deleted: false,
    }));
    await queryInterface.bulkInsert("doctors", doctors);

    // Services
    const serviceTypes = ["Consultation", "X-Ray", "MRI", "Ultrasound", "ECG"];
    const services = Array.from({ length: 20 }, (_, i) => ({
      name: `${serviceTypes[i % serviceTypes.length]} ${i + 1}`,
      price: ((i + 1) * 10).toFixed(2),
      description: `Service description ${i + 1}`,
      created_at: now,
      updated_at: now,
      is_deleted: false,
    }));
    await queryInterface.bulkInsert("services", services);

    // Patients
    const patients = Array.from({ length: 20 }, (_, i) => ({
      full_name: `Patient ${i + 1}`,
      dob: `198${i % 10}-0${(i % 9) + 1}-15`,
      phone: `09123456${(i + 1).toString().padStart(2, "0")}`,
      email: `patient${i + 1}@email.com`,
      address: `${i + 1} Health St, City`,
      created_at: now,
      updated_at: now,
      is_deleted: false,
    }));
    await queryInterface.bulkInsert("patients", patients);

    // Appointments
    const appointments = Array.from({ length: 20 }, (_, i) => ({
      patient_id: (i % 20) + 1,
      doctor_id: ((i + 3) % 20) + 1,
      scheduled_at: new Date(now.getTime() + (i + 1) * 86400000),
      status: (i + 1) % 2 === 0 ? "Scheduled" : "Completed",
      notes: `Appointment note ${i + 1}`,
      created_at: now,
      updated_at: now,
      is_deleted: false,
    }));
    await queryInterface.bulkInsert("appointments", appointments);

    // Appointment Services
    const appointmentServices = Array.from({ length: 20 }, (_, i) => ({
      appointment_id: i + 1,
      service_id: (i % 20) + 1,
      quantity: (i % 3) + 1,
      created_at: now,
      updated_at: now,
      is_deleted: false,
    }));
    await queryInterface.bulkInsert(
      "appointment_services",
      appointmentServices
    );

    // Invoices
    const invoices = Array.from({ length: 20 }, (_, i) => ({
      appointment_id: i + 1,
      total_amount: (100 + (i + 1) * 5).toFixed(2),
      paid_at: (i + 1) % 2 === 0 ? now : null,
      payment_status: (i + 1) % 2 === 0 ? "Paid" : "Unpaid",
      created_at: now,
      updated_at: now,
      is_deleted: false,
    }));
    await queryInterface.bulkInsert("invoices", invoices);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("invoices", null, {});
    await queryInterface.bulkDelete("appointment_services", null, {});
    await queryInterface.bulkDelete("appointments", null, {});
    await queryInterface.bulkDelete("patients", null, {});
    await queryInterface.bulkDelete("services", null, {});
    await queryInterface.bulkDelete("doctors", null, {});
  },
};
