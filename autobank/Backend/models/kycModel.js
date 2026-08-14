const mongoose = require('mongoose');

const kycSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  documentType: { type: String, required: true }, // passport, driving_license, national_id
  documentNumber: { type: String, required: true },
  fileUrl: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  rejectionReason: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('KYC', kycSchema);
