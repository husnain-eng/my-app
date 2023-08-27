// routes/api.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/student');

// Create a new todo
router.post('/todos', async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text,
    });
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving the todo.' });
  }
});

// Get all todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching todos.' });
  }
});

// Update todo status
router.put('/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the todo.' });
  }
});

// Delete a todo
router.delete('/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the todo.' });
  }
});

module.exports = router;
