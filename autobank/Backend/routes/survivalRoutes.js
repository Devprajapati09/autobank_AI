const express = require('express');
const router = express.Router();
const { getSurvivalRunway } = require('../controllers/survivalController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getSurvivalRunway);

module.exports = router;
