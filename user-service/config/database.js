const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost:27017/root', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;