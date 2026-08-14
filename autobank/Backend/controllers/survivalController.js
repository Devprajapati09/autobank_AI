const survivalService = require('../services/survivalService');

const getSurvivalRunway = async (req, res, next) => {
  try {
    const analysis = await survivalService.getSurvivalAnalysis(req.user.id);
    res.status(200).json({ success: true, data: analysis });
  } catch (err) {
    next(err);
  }
};

module.exports = { getSurvivalRunway };
