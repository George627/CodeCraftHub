const express = require('express');
const mongoose = require('mongoose');
const knowledgeGraph = require('../models/knowledgeGraph');
const authRoutes = require('../routes/authRoutes');

const knowledgeGraphRoutes = express.Router();

knowledgeGraphRoutes.post('/add', async (req, res) => {
  try {
    const knowledgeGraph = new knowledgeGraph.KnowledgeGraph(req.body);
    await knowledgeGraph.save();
    res.json(knowledgeGraph);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

knowledgeGraphRoutes.get('/get', authRoutes, async (req, res) => {
  try {
    const knowledgeGraph = await knowledgeGraph.findById(req.user.id);
    res.json(knowledgeGraph);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

knowledgeGraphRoutes.put('/update', authRoutes, async (req, res) => {
  try {
    const knowledgeGraph = await knowledgeGraph.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json(knowledgeGraph);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

knowledgeGraphRoutes.delete('/delete', authRoutes, async (req, res) => {
  try {
    await knowledgeGraph.findByIdAndDelete(req.user.id);
    res.json({ message: 'Knowledge graph deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = knowledgeGraphRoutes;