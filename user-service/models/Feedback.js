const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  content: String,
  // other feedback fields...
});

module.exports = mongoose.model('Feedback', feedbackSchema);