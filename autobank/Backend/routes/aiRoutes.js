const express = require('express');
const router = express.Router();
const { chat, getHistory } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.post('/chat', protect, chat);
router.get('/conversations', protect, getHistory);

module.exports = router;
