const express = require('express');
const router = express.Router();
const { getSavings, createSavings } = require('../controllers/savingsController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getSavings);
router.post('/', protect, createSavings);

module.exports = router;
