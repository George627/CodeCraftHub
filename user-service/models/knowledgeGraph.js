const knowledgeGraph = require('../models/knowledgeGraph');
const mongoose = require('mongoose');

const knowledgeGraphSchema = new mongoose.Schema({
  name: String,
  // other fields...
});

module.exports = mongoose.model('KnowledgeGraph', knowledgeGraphSchema);