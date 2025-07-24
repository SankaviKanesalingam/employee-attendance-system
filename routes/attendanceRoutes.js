const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.post('/check-in', authMiddleware, attendanceController.checkIn);
router.post('/check-out/:id', authMiddleware, attendanceController.checkOut);
router.get('/logs', authMiddleware, attendanceController.getUserLogs);
router.get('/all-logs', authMiddleware, adminMiddleware, attendanceController.getAllLogs);

module.exports = router;