const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const knowledgeGraphRoutes = require('./routes/knowledgeGraphRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/root', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/knowledge-graph', knowledgeGraphRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});