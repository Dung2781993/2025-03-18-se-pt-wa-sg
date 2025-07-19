const express = require("express");
const router = express.Router();
const ClinicController = require("../controllers/ClinicController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all appointments for a specific patient (with doctor and patient info)
router.get(
  "/patients/:id/appointments",
  // authMiddleware,
  ClinicController.getPatientAppointments
);

// Get all services for a specific appointment
router.get(
  "/appointments/:id/services",
  ClinicController.getAppointmentServices
);

// Create new appointment with attached services
router.post("/appointments", ClinicController.createAppointmentWithServices);

// Get invoice detail for an appointment
router.get(
  "/appointments/:id/invoice",
  ClinicController.getInvoiceForAppointment
);

// Update invoice status (e.g., paid, voided)
router.put("/invoices/:id", ClinicController.updateInvoiceStatus);

// Full check-in: new patient + appointment + services + invoice
router.post("/checkin", ClinicController.createCompleteCheckin);

// Cancel an appointment and void invoice
router.put("/appointments/:id/cancel", ClinicController.cancelAppointment);

// Reschedule an appointment with updated services
router.put(
  "/appointments/:id/reschedule",
  ClinicController.rescheduleAppointment
);

router.get(
  "/appointments/search",
  authMiddleware,
  ClinicController.searchAppointments
);

router.get(
  "/doctors",
  // authMiddleware,
  ClinicController.getDoctors
);

router.get(
  "/doctors-type-specialty",
  // authMiddleware,
  ClinicController.getDoctorTypeSpecialty
);

router.post(
  "/doctors",
  // authMiddleware,
  ClinicController.createNewDoctor
);

router.put(
  "/doctor/:id",
  // authMiddleware,
  ClinicController.updateDoctor
);

module.exports = router;
