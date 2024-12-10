const express = require('express');
const User = require('../models/User');

const UserController = {
  async createUser(req, res) {
    try {
      const user = new User(req.body);
      await user.save();
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getUser(req, res) {
    const userId = req.params.id;
    try {
      const user = await User.findById(userId);
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async updateUser(req, res) {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.json(user);
  },

  async deleteUser(req, res) {
    const userId = req.params.id;
    try {
      await User.findByIdAndDelete(userId);
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = UserController;