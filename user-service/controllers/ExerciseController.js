const express = require('express');
const User = require('../models/User');
const Feedback = require('../models/Feedback');
const knowledgeGraph = require('../models/knowledgeGraph');

const ExerciseController = {
  async createExercise(req, res) {
    try {
      const exercise = new Exercise(req.body);
      await exercise.save();
      res.json(exercise);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getExercise(req, res) {
    try {
      const exerciseId = req.params.id;
      const exercise = await Exercise.findById(exerciseId);
      res.json(exercise);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async updateExercise(req, res) {
    try {
      const exerciseId = req.params.id;
      const exercise = await Exercise.findByIdAndUpdate(exerciseId, req.body, { new: true });
      res.json(exercise);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async deleteExercise(req, res) {
    try {
      const exerciseId = req.params.id;
      await Exercise.findByIdAndDelete(exerciseId);
      res.json({ message: 'Exercise deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async createFeedback(req, res) {
    try {
      const feedback = new Feedback(req.body);
      await feedback.save();
      res.json(feedback);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getFeedback(req, res) {
    try {
      const feedbackId = req.params.id;
      const feedback = await Feedback.findById(feedbackId);
      res.json(feedback);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async updateFeedback(req, res) {
    try {
      const feedbackId = req.params.id;
      const feedback = await Feedback.findByIdAndUpdate(feedbackId, req.body, { new: true });
      res.json(feedback);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async deleteFeedback(req, res) {
    try {
      const feedbackId = req.params.id;
      await Feedback.findByIdAndDelete(feedbackId);
      res.json({ message: 'Feedback deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = ExerciseController;