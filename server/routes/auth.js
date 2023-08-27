// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/student');
const JWT_SECRET= require('../env');

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, registrationNumber } = req.body;

    // Check if student with the same email or registration number already exists
    const existingStudent = await Student.findOne({
      $or: [{ email }, { registrationNumber }],
    });
    if (existingStudent) {
      return res.status(400).json({ error: 'Student already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      registrationNumber,
    });

    await student.save();

    res.json({ message: 'Registration successful.' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while registering the student.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { registrationNumber, password } = req.body;

    // Find student by email
    const student = await Student.findOne({ registrationNumber });
    if (!student) {
      return res.status(401).json({ error: 'Invalid registration number or password.' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, student.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Create and send JWT token
    const token = jwt.sign({ id: student._id, registrationNumber }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
});

module.exports = router;
