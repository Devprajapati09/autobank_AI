const mongoose = require('mongoose');

const approvalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  actionType: { type: String, required: true }, // e.g. TRANSFER_FUNDS, APPLY_LOAN, PAY_BILL
  payload: { type: Object, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  riskScore: { type: Number, default: 0.1 }
}, { timestamps: true });

module.exports = mongoose.model('Approval', approvalSchema);
