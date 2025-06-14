const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Enrollment = sequelize.define('Enrollment', {
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  grade: {
    type: DataTypes.STRING(2)
  },
  created_at: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updated_at: {
    type: DataTypes.DATE,
    field: 'updated_at'
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'enrollments',
  timestamps: false
});

module.exports = Enrollment;