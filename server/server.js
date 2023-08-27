// server.js
const cors = require('cors'); 
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');
require('dotenv').config()
const bodyParser = require('body-parser');
const assignmentRoutes = require('./routes/assignment');

const PORT = process.env.PORT || 3005;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/lms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/public', express.static('public'));

// routes
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);
app.use('/assignment', assignmentRoutes);

// Define your routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
