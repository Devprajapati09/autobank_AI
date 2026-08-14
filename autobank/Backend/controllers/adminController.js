const User = require('../models/userModel');

const getSystemMetrics = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments({});
    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        activeAgents: 8,
        systemStatus: 'OPERATIONAL'
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getSystemMetrics };
