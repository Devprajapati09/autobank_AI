const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountNumber: { type: String, required: true, unique: true },
  accountType: { type: String, enum: ['savings', 'checking', 'investment'], default: 'savings' },
  balance: { type: Number, default: 0.00 },
  currency: { type: String, default: 'INR' }
}, { timestamps: true });

module.exports = mongoose.model('Account', accountSchema);
