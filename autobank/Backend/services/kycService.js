const KYC = require('../models/kycModel');

const submitKyc = async (userId, documentType, documentNumber, fileUrl) => {
  return await KYC.create({ userId, documentType, documentNumber, fileUrl, status: 'pending' });
};

const getKycStatus = async (userId) => {
  return await KYC.findOne({ userId }) || { status: 'not_submitted' };
};

module.exports = { submitKyc, getKycStatus };
