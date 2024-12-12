const express = require('express');
const mongoose = require('mongoose');
const Course = require('../models/Course');
const authRoutes = require('../routes/authRoutes');

const courseRoutes = express.Router();

courseRoutes.post('/create', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

courseRoutes.get('/get', authRoutes, async (req, res) => {
  try {
    const course = await Course.findById(req.user.id);
    res.json(course);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

courseRoutes.put('/update', authRoutes, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

courseRoutes.delete('/delete', authRoutes, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.user.id);
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = courseRoutes;