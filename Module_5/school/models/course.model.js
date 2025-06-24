const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Professor = require("./professor.model");

const Course = sequelize.define(
  "Course",
  {
    course_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_code: {
      type: DataTypes.STRING(10),
    },
    title: {
      type: DataTypes.STRING(100),
    },
    credit_hours: {
      type: DataTypes.INTEGER,
    },
    professor_id: {
      type: DataTypes.INTEGER,
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
    tableName: "courses",
    timestamps: false,
  }
);


Course.belongsTo(Professor, { foreignKey: "professor_id" });
Professor.hasMany(Course, { foreignKey: "professor_id" });

module.exports = Course;
