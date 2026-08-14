const express = require('express');
const router = express.Router();
const { getLoans, applyLoan } = require('../controllers/loanController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getLoans);
router.post('/apply', protect, applyLoan);

module.exports = router;
