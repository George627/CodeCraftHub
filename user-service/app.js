const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const knowledgeGraphRoutes = require('./routes/knowledgeGraphRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/knowledge-graph', knowledgeGraphRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});