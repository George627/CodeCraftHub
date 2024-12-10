const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  created_at: Date,
  updated_at: Date,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
  feedbacks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }]
});

module.exports = mongoose.model('Exercise', exerciseSchema);