const express = require('express');
const User = require('../models/User');
const Feedback = require('../models/Feedback');
const knowledgeGraph = require('../models/knowledgeGraph');

const courseRoutes = express.Router();

// Course Routes
courseRoutes.post('/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

courseRoutes.get('/courses', auth, async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

courseRoutes.put('/courses/:id', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findByIdAndUpdate(courseId, req.body, { new: true });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

courseRoutes.delete('/courses/:id', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    await Course.findByIdAndDelete(courseId);
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

courseRoutes.get('/courses/:id', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    res.json(course);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

courseRoutes.put('/courses/:id', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findByIdAndUpdate(courseId, req.body, { new: true });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

courseRoutes.delete('/courses/:id', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    await Course.findByIdAndDelete(courseId);
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

courseRoutes.get('/courses/:id/feedbacks', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const feedbacks = await Feedback.find({ course_id: courseId });
    res.json(feedbacks);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

courseRoutes.put('/courses/:id/feedbacks/:id', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const feedbackId = req.params.id;
    const feedback = await Feedback.findByIdAndUpdate(feedbackId, req.body, { new: true });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

courseRoutes.delete('/courses/:id/feedbacks/:id', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const feedbackId = req.params.id;
    await Feedback.findByIdAndDelete(feedbackId);
    res.json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = courseRoutes;