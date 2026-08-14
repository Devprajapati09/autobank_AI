const express = require('express');
const router = express.Router();
const { submitKyc, getKycStatus } = require('../controllers/kycController');
const { protect } = require('../middleware/authMiddleware');

router.post('/submit', protect, submitKyc);
router.get('/status', protect, getKycStatus);

module.exports = router;
