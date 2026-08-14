const express = require('express');
const router = express.Router();
const { getBudgets, updateBudget } = require('../controllers/budgetController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getBudgets);
router.post('/', protect, updateBudget);

module.exports = router;
