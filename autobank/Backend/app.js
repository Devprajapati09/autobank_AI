const express = require('express');
const cors = require('cors');
const path = require('path');
const { errorHandler } = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const kycRoutes = require('./routes/kycRoutes');
const financeRoutes = require('./routes/financeRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const billRoutes = require('./routes/billRoutes');
const loanRoutes = require('./routes/loanRoutes');
const savingsRoutes = require('./routes/savingsRoutes');
const survivalRoutes = require('./routes/survivalRoutes');
const documentRoutes = require('./routes/documentRoutes');
const schemeRoutes = require('./routes/schemeRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const aiRoutes = require('./routes/aiRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/kyc', kycRoutes);
app.use('/api/v1/finance', financeRoutes);
app.use('/api/v1/budget', budgetRoutes);
app.use('/api/v1/bills', billRoutes);
app.use('/api/v1/loans', loanRoutes);
app.use('/api/v1/savings', savingsRoutes);
app.use('/api/v1/survival', survivalRoutes);
app.use('/api/v1/documents', documentRoutes);
app.use('/api/v1/schemes', schemeRoutes);
app.use('/api/v1/transactions', transactionRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/ai', aiRoutes);
app.use('/api/v1/admin', adminRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, status: 'AutoBank AI Backend is operational', timestamp: new Date() });
});

// Error Handler (must be last)
app.use(errorHandler);

module.exports = app;
