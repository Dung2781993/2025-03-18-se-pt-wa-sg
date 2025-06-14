module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "AppointmentService",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      appointment_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
      quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
      is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      tableName: "appointment_services",
      underscored: true,
      timestamps: true,
    }
  );
};
