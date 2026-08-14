const express = require('express');
const router = express.Router();
const { getSummary } = require('../controllers/financeController');
const { protect } = require('../middleware/authMiddleware');

router.get('/summary', protect, getSummary);

module.exports = router;
