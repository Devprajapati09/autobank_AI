const schemeService = require('../services/schemeService');

const getSchemes = async (req, res, next) => {
  try {
    const schemes = await schemeService.getAllSchemes();
    res.status(200).json({ success: true, data: schemes });
  } catch (err) {
    next(err);
  }
};

module.exports = { getSchemes };
