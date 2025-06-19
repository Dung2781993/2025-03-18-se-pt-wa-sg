const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config")["development"];

const sequelize = new Sequelize(config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.User = require("./user")(sequelize, DataTypes);
db.RefreshToken = require("./refreshToken")(sequelize, DataTypes);
db.Patient = require("./patient")(sequelize, DataTypes);
db.Doctor = require("./doctor")(sequelize, DataTypes);
db.Appointment = require("./appointment")(sequelize, DataTypes);
db.Service = require("./service")(sequelize, DataTypes);
db.AppointmentService = require("./appointmentService")(sequelize, DataTypes);
db.Invoice = require("./invoice")(sequelize, DataTypes);

// Model Associations
db.Patient.hasMany(db.Appointment, { foreignKey: "patient_id" });
db.Appointment.belongsTo(db.Patient, { foreignKey: "patient_id" });

db.Doctor.hasMany(db.Appointment, { foreignKey: "doctor_id" });
db.Appointment.belongsTo(db.Doctor, { foreignKey: "doctor_id" });

db.Appointment.belongsToMany(db.Service, {
  through: db.AppointmentService,
  foreignKey: "appointment_id",
});
db.Service.belongsToMany(db.Appointment, {
  through: db.AppointmentService,
  foreignKey: "service_id",
});

db.Appointment.hasMany(db.AppointmentService, { foreignKey: "appointment_id" });
db.AppointmentService.belongsTo(db.Appointment, {
  foreignKey: "appointment_id",
});

db.Service.hasMany(db.AppointmentService, { foreignKey: "service_id" });
db.AppointmentService.belongsTo(db.Service, { foreignKey: "service_id" });

db.Appointment.hasOne(db.Invoice, { foreignKey: "appointment_id" });
db.Invoice.belongsTo(db.Appointment, { foreignKey: "appointment_id" });

// New Associations
db.User.hasOne(db.Doctor, { foreignKey: "user_id", as: "doctorProfile" });
db.Doctor.belongsTo(db.User, { foreignKey: "user_id", as: "user" });

db.User.hasMany(db.RefreshToken, { foreignKey: "user_id", as: "tokens" });
db.RefreshToken.belongsTo(db.User, { foreignKey: "user_id", as: "user" });

module.exports = db;
