const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  eligibility: { type: String },
  category: { type: String, required: true },
  benefits: { type: String },
  applicationUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Scheme', schemeSchema);
