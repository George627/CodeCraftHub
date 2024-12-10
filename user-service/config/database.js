const mongoose = require('mongoose');

const db = require('./config/database');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;