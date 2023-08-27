// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },

  assignments: [
    {
      courseTitle: String,
      courseCode: String,
      fileUrl: String,
      // Add any other assignment-related fields here
    },
  ],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
