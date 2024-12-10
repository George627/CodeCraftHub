const express = require('express');
const User = require('../models/User');
const auth = require('./authRoutes');

const userRoutes = express.Router();

// User Routes
userRoutes.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRoutes.get('/login', auth, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRoutes.post('/logout', auth, async (req, res) => {
  try {
    await User.findOneAndDelete({ username: req.user.username });
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRoutes.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

userRoutes.put('/profile', auth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRoutes.delete('/profile', auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Feedback Routes
userRoutes.post('/feedbacks', auth, async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRoutes.get('/feedbacks', auth, async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

userRoutes.put('/feedbacks/:id', auth, async (req, res) => {
  try {
    const feedbackId = req.params.id;
    const feedback = await Feedback.findByIdAndUpdate(feedbackId, req.body, { new: true });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRoutes.delete('/feedbacks/:id', auth, async (req, res) => {
  try {
    const feedbackId = req.params.id;
    await Feedback.findByIdAndDelete(feedbackId);
    res.json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = userRoutes;