const kycService = require('../services/kycService');

const submitKyc = async (req, res, next) => {
  try {
    const { documentType, documentNumber, fileUrl } = req.body;
    const result = await kycService.submitKyc(req.user.id, documentType, documentNumber, fileUrl);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

const getKycStatus = async (req, res, next) => {
  try {
    const status = await kycService.getKycStatus(req.user.id);
    res.status(200).json({ success: true, data: status });
  } catch (err) {
    next(err);
  }
};

module.exports = { submitKyc, getKycStatus };
