module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Service",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      description: DataTypes.TEXT,
      is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      tableName: "services",
      underscored: true,
      timestamps: true,
    }
  );
};
