const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const authController = {
  register: (req, res) => {
    const { username, password, role } = req.body;
    User.create(username, password, role || 'employee', (err, result) => {
      if (err) {
        return res.status(400).json({ message: 'User creation failed', error: err.message });
      }
      res.status(201).json({ message: 'User created', id: result.lastID });
    });
  },

  login: (req, res) => {
    const { username, password } = req.body;
    User.findByUsername(username, (err, user) => {
      if (err || !user) {
        return res.status(400).json({ message: 'User not found' });
      }
      const isValidPassword = require('bcryptjs').compareSync(password, user.password);
      if (!isValidPassword) {
        return res.status(400).json({ message: 'Invalid password' });
      }
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });
      res.json({ token });
    });
  }
};

module.exports = authController;