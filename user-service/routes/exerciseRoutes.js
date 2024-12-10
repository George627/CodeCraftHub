const express = require('express');
const User = require('../models/User');
const Feedback = require('../models/Feedback');
const knowledgeGraph = require('../models/knowledgeGraph');

const exerciseRoutes = express.Router();

// Exercise Routes
exerciseRoutes.post('/exercises', async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    res.json(exercise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

exerciseRoutes.get('/exercises', auth, async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

exerciseRoutes.put('/exercises/:id', auth, async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const exercise = await Exercise.findByIdAndUpdate(exerciseId, req.body, { new: true });
    res.json(exercise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

exerciseRoutes.delete('/exercises/:id', auth, async (req, res) => {
  try {
    const exerciseId = req.params.id;
    await Exercise.findByIdAndDelete(exerciseId);
    res.json({ message: 'Exercise deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

exerciseRoutes.get('/exercises/:id/feedbacks', auth, async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const feedbacks = await Feedback.find({ exercise_id: exerciseId });
    res.json(feedbacks);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

exerciseRoutes.put('/exercises/:id/feedbacks/:id', auth, async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const feedbackId = req.params.id;
    const feedback = await Feedback.findByIdAndUpdate(feedbackId, req.body, { new: true });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

exerciseRoutes.delete('/exercises/:id/feedbacks/:id', auth, async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const feedbackId = req.params.id;
    await Feedback.findByIdAndDelete(feedbackId);
    res.json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Knowledge Graph Routes
exerciseRoutes.get('/knowledge-graph', auth, async (req, res) => {
  try {
    const knowledgeGraph = await knowledgeGraph.getKnowledgeGraph();
    res.json(knowledgeGraph);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

exerciseRoutes.put('/knowledge-graph', auth, async (req, res) => {
  try {
    const knowledgeGraphId = req.params.id;
    const knowledgeGraph = await knowledgeGraph.updateKnowledgeGraph(knowledgeGraphId);
    res.json(knowledgeGraph);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

exerciseRoutes.delete('/knowledge-graph/:id', auth, async (req, res) => {
  try {
    const knowledgeGraphId = req.params.id;
    await knowledgeGraph.deleteKnowledgeGraph(knowledgeGraphId);
    res.json({ message: 'Knowledge graph deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = exerciseRoutes;