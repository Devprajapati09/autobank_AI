const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['unpaid', 'paid', 'overdue'], default: 'unpaid' },
  category: { type: String, default: 'utility' }
}, { timestamps: true });

module.exports = mongoose.model('Bill', billSchema);
