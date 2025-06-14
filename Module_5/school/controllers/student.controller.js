const Enrollment = require("../models/enrollment.model");
const Course = require("../models/course.model");
const Professor = require("../models/professor.model");
const Student = require("../models/student.model");

exports.getAllStudents = async (req, res) => {
  try {
    const { enrollment_year, grade } = req.query;
    const whereConditions = {};
    if (enrollment_year) whereConditions.enrollment_year = enrollment_year;

    try {
      const students = await Student.findAll({
        include: [
          {
            model: Course,
            through: {
              model: Enrollment,
              where: grade ? { grade: grade } : {}, 
            },
            attributes: ["course_id", "course_code", "title"],
          },
        ],
        where: whereConditions,
        attributes: ["student_id", "full_name", "enrollment_year"],
      });

      if (students.length === 0) {
        return res
          .status(404)
          .json({ error: "No students found for the provided filters" });
      }

      res.json(students);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch students" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findOne({ where: { student_id: id } });

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { student_id, full_name, enrollment_year } = req.body;

    // Create a new student
    const newStudent = await Student.create({
      student_id,
      full_name,
      enrollment_year,
    });

    if (!newStudent) {
      return res.status(400).json({ error: "Failed to create student" });
    }

    res.status(201).json("New student created successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findOne({ where: { student_id: id } });
    
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const { full_name, enrollment_year } = req.body;

    const updatedStudent = await student.update({
      full_name: full_name || student.full_name,
      enrollment_year: enrollment_year || student.enrollment_year,
    });

    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findOne({ where: { student_id: id } });
    
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    // Hard delete the student
    await student.destroy();
    
    // Soft delete the student
    // await student.update({ is_deleted: true });

    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};