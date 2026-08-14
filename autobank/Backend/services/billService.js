const Bill = require('../models/billModel');

const getUserBills = async (userId) => {
  return await Bill.find({ userId });
};

const payBill = async (billId) => {
  return await Bill.findByIdAndUpdate(billId, { status: 'paid' }, { new: true });
};

module.exports = { getUserBills, payBill };
