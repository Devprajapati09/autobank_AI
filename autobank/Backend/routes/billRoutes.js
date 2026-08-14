const express = require('express');
const router = express.Router();
const { getBills, payBill } = require('../controllers/billController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getBills);
router.post('/:id/pay', protect, payBill);

module.exports = router;
