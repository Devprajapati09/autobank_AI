const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  source: { type: String, required: true },
  amount: { type: Number, required: true },
  frequency: { type: String, enum: ['monthly', 'weekly', 'one_time'], default: 'monthly' },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Income', incomeSchema);
