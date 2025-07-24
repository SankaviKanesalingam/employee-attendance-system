const db = require('../config/database');
const bcrypt = require('bcryptjs');

const User = {
  create: (username, password, role, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.run(
      `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`,
      [username, hashedPassword, role],
      function (err) {
        callback(err, this);
      }
    );
  },

  findByUsername: (username, callback) => {
    db.get(`SELECT * FROM users WHERE username = ?`, [username], callback);
  }
};

module.exports = User;