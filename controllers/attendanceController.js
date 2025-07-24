const Attendance = require('../models/attendance');

const attendanceController = {
  checkIn: (req, res) => {
    const { userId } = req.user;
    const checkIn = new Date().toISOString();
    Attendance.checkIn(userId, checkIn, (err, result) => {
      if (err) {
        return res.status(400).json({ message: 'Check-in failed', error: err.message });
      }
      res.json({ message: 'Checked in', id: result.lastID });
    });
  },

  checkOut: (req, res) => {
    const { id } = req.params;
    const checkOut = new Date().toISOString();
    Attendance.checkOut(id, checkOut, (err) => {
      if (err) {
        return res.status(400).json({ message: 'Check-out failed', error: err.message });
      }
      res.json({ message: 'Checked out' });
    });
  },

  getUserLogs: (req, res) => {
    const { userId } = req.user;
    Attendance.findByUserId(userId, (err, logs) => {
      if (err) {
        return res.status(400).json({ message: 'Failed to fetch logs', error: err.message });
      }
      res.json(logs);
    });
  },

  getAllLogs: (req, res) => {
    Attendance.findAll((err, logs) => {
      if (err) {
        return res.status(400).json({ message: 'Failed to fetch logs', error: err.message });
      }
      res.json(logs);
    });
  }
};

module.exports = attendanceController;