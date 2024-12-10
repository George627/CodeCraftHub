const express = require('express');
const User = require('../models/User');
const Feedback = require('../models/Feedback');
const knowledgeGraph = require('../models/knowledgeGraph');

const CourseController = {
  async createCourse(req, res) {
    try {
      const course = new Course(req.body);
      await course.save();
      res.json(course);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getCourse(req, res) {
    try {
      const courseId = req.params.id;
      const course = await Course.findById(courseId);
      res.json(course);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async updateCourse(req, res) {
    try {
      const courseId = req.params.id;
      const course = await Course.findByIdAndUpdate(courseId, req.body, { new: true });
      res.json(course);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async deleteCourse(req, res) {
    try {
      const courseId = req.params.id;
      await Course.findByIdAndDelete(courseId);
      res.json({ message: 'Course deleted successfully' });
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

module.exports = CourseController;