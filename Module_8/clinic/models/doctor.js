module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define(
    "Doctor",
    {
      name: DataTypes.STRING,
      specialty: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "Doctors",
      underscored: true,
      timestamps: true,
    }
  );

  Doctor.associate = function (models) {
    Doctor.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  };

  return Doctor;
};
