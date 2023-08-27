const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Student = require('../models/student');
const JWT_SECRET = require('../env');


const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    try {
      console.log("req body", req.body)
      token = req.headers.authorization;

      const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);

      let student = await Student.findOne({
        registrationNumber: decoded.registrationNumber
      });
      if (student) {
          req.student = student
      } else {
        res.status(401);
        throw new Error("Not authorized, token failed 1");
      }

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed 2");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token 3");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

module.exports = { protect, admin };