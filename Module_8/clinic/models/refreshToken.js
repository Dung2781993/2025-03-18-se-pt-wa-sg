module.exports = (sequelize, DataTypes) => {
  const RefreshToken = sequelize.define(
    "RefreshToken",
    {
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expires_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "RefreshTokens",
      underscored: true,
      timestamps: true,
    }
  );

  RefreshToken.associate = function (models) {
    RefreshToken.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  };

  return RefreshToken;
};
