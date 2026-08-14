const express = require('express');
const router = express.Router();
const { getSystemMetrics } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

router.get('/metrics', protect, getSystemMetrics);

module.exports = router;
