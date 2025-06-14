module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Invoice",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      appointment_id: DataTypes.INTEGER,
      total_amount: DataTypes.DECIMAL(10, 2),
      paid_at: DataTypes.DATE,
      payment_status: { type: DataTypes.STRING, defaultValue: "Unpaid" },
      is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      tableName: "invoices",
      underscored: true,
      timestamps: true,
    }
  );
};
