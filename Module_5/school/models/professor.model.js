const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Professor = sequelize.define(
  "Professor",
  {
    professor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING(100),
    },
    department: {
      type: DataTypes.STRING(100),
    },
    created_at: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updated_at: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "professors",
    timestamps: false,
  }
);

module.exports = Professor;
