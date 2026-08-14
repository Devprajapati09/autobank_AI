const express = require('express');
const router = express.Router();
const { upload, getDocs } = require('../controllers/documentController');
const { protect } = require('../middleware/authMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');

router.get('/', protect, getDocs);
router.post('/upload', protect, uploadMiddleware.single('file'), upload);

module.exports = router;
