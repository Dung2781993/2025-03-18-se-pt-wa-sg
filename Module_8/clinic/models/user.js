module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM("admin", "doctor", "staff"),
      is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "Users",
      underscored: true,
      timestamps: true,
    }
  );

  User.associate = function (models) {
    User.hasOne(models.Doctor, { foreignKey: "user_id", as: "doctorProfile" });
    User.hasMany(models.RefreshToken, { foreignKey: "user_id", as: "tokens" });
  };

  return User;
};
