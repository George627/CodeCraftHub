const express = require('express');
const auth = require('../utils/auth');

const authRoutes = express.Router();

authRoutes.post('/login', async (req, res) => {
  try {
    const user = await auth.login(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

authRoutes.get('/logout', async (req, res) => {
  try {
    await auth.logout(req.user);
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

authRoutes.get('/profile', auth, async (req, res) => {
  try {
    const user = await auth.getUser(req.user);
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

authRoutes.put('/update', auth, async (req, res) => {
  try {
    const user = await auth.updateUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

authRoutes.delete('/delete', auth, async (req, res) => {
  try {
    await auth.deleteUser(req.user);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = authRoutes;