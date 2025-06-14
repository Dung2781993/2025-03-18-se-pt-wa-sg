module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Appointment",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      patient_id: DataTypes.INTEGER,
      doctor_id: DataTypes.INTEGER,
      scheduled_at: DataTypes.DATE,
      status: { type: DataTypes.STRING, defaultValue: "Scheduled" },
      notes: DataTypes.TEXT,
      is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      tableName: "appointments",
      underscored: true,
      timestamps: true,
    }
  );
};
