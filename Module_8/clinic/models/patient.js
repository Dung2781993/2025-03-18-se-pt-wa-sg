module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Patient",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      full_name: DataTypes.STRING,
      dob: DataTypes.DATEONLY,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.TEXT,
      is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      tableName: "patients",
      underscored: true,
      timestamps: true,
    }
  );
};
