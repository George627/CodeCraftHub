const mongoose = require('mongoose');

const knowledgeGraphSchema = new mongoose.Schema({
  // knowledge graph fields...
});

module.exports = mongoose.model('KnowledgeGraph', knowledgeGraphSchema);