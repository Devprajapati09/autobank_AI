const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  loanType: { type: String, required: true }, // personal, home, auto, education
  principalAmount: { type: Number, required: true },
  interestRate: { type: Number, required: true }, // annual %
  tenureMonths: { type: Number, required: true },
  remainingBalance: { type: Number, required: true },
  monthlyEmi: { type: Number, required: true },
  status: { type: String, enum: ['active', 'closed', 'defaulted'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);
