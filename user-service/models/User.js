const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // other user fields...
});

module.exports = mongoose.model('User', userSchema);