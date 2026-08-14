const express = require('express');
const router = express.Router();
const { getSchemes } = require('../controllers/schemeController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getSchemes);

module.exports = router;
