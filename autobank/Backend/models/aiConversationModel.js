const mongoose = require('mongoose');

const aiConversationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['user', 'assistant', 'system'], required: true },
  message: { type: String, required: true },
  agentType: { type: String, default: 'financial_advisor' }
}, { timestamps: true });

module.exports = mongoose.model('AIConversation', aiConversationSchema);
