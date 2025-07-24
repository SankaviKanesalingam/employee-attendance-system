const db = require('../config/database');

const Attendance = {
  checkIn: (userId, checkIn, callback) => {
    db.run(
      `INSERT INTO attendance (userId, checkIn) VALUES (?, ?)`,
      [userId, checkIn],
      function (err) {
        callback(err, this);
      }
    );
  },

  checkOut: (id, checkOut, callback) => {
    db.run(
      `UPDATE attendance SET checkOut = ? WHERE id = ? AND checkOut IS NULL`,
      [checkOut, id],
      function (err) {
        callback(err, this);
      }
    );
  },

  findByUserId: (userId, callback) => {
    db.all(`SELECT * FROM attendance WHERE userId = ?`, [userId], callback);
  },

  findAll: (callback) => {
    db.all(`SELECT * FROM attendance`, callback);
  }
};

module.exports = Attendance;