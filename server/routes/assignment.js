// routes/assignments.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const asyncHandler = require('express-async-handler')
const { protect } = require('../middleware/authMiddleware');

const DIR = './public/assignments/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      cb(null, true);
    }
});

// Upload assignment for a student
router.route('/upload').post(protect, upload.single('file'), asyncHandler( async (req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host')
    const { courseTitle, courseCode } = req.body;
    if (!req.student) {
      return res.status(404).json({ error: 'Student not found.' });
    }
    req.student.assignments.push({ courseTitle, courseCode, fileUrl: url + '/public/assignments/' + req.file.filename });
    await req.student.save();

    res.json({ message: 'Assignment uploaded successfully.' });
  } catch (error) {
    // console.log(error)
    res.status(500).json({ error: 'An error occurred while uploading the assignment.' });
  }
}));

module.exports = router;
