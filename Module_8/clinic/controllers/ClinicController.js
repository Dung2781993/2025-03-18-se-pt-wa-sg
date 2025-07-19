const ClinicService = require("../services/ClinicService");

module.exports = {
  getPatientAppointments: (req, res) =>
    ClinicService.getPatientAppointments(req, res),
  getAppointmentServices: (req, res) =>
    ClinicService.getAppointmentServices(req, res),
  createAppointmentWithServices: (req, res) =>
    ClinicService.createAppointmentWithServices(req, res),
  getInvoiceForAppointment: (req, res) =>
    ClinicService.getInvoiceForAppointment(req, res),
  updateInvoiceStatus: (req, res) =>
    ClinicService.updateInvoiceStatus(req, res),
  createCompleteCheckin: (req, res) =>
    ClinicService.createCompleteCheckin(req, res),
  cancelAppointment: (req, res) => ClinicService.cancelAppointment(req, res),
  rescheduleAppointment: (req, res) =>
    ClinicService.rescheduleAppointment(req, res),
  searchAppointments: (req, res) => ClinicService.searchAppointments(req, res),
  getDoctors: (req, res) => ClinicService.getDoctors(req, res),
  getDoctorTypeSpecialty: (req, res) => ClinicService.getDoctorTypeSpecialty(req, res),
  createNewDoctor: (req, res) => ClinicService.createNewDoctor(req, res),
  updateDoctor: (req, res) => ClinicService.updateDoctor(req, res),
};
