const Approval = require('../models/approvalModel');

const createApprovalRequest = async (userId, actionType, payload) => {
  return await Approval.create({ userId, actionType, payload, status: 'pending' });
};

const updateApprovalStatus = async (approvalId, status) => {
  return await Approval.findByIdAndUpdate(approvalId, { status }, { new: true });
};

module.exports = { createApprovalRequest, updateApprovalStatus };
