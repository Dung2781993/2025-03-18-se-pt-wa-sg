const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Enrollment = require("./enrollment.model");
const Course = require("./course.model");

const Student = sequelize.define(
  "Student",
  {
    student_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enrollment_year: {
      type: DataTypes.INTEGER,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "students",
    timestamps: false,
  }
);

Student.hasMany(Enrollment, { foreignKey: "student_id" });
Enrollment.belongsTo(Student, { foreignKey: "student_id" });

Student.belongsToMany(Course, {
  through: Enrollment,
  foreignKey: "student_id",
  otherKey: "course_id",
});


module.exports = Student;
