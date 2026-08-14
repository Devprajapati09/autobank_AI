const billService = require('../services/billService');

const getBills = async (req, res, next) => {
  try {
    const bills = await billService.getUserBills(req.user.id);
    res.status(200).json({ success: true, data: bills });
  } catch (err) {
    next(err);
  }
};

const payBill = async (req, res, next) => {
  try {
    const result = await billService.payBill(req.params.id);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { getBills, payBill };
