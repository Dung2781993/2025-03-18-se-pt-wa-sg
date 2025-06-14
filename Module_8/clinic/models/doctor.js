module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Doctor",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
      specialty: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      tableName: "doctors",
      underscored: true,
      timestamps: true,
    }
  );
};
