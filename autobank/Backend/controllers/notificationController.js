const notificationService = require('../services/notificationService');

const getNotifications = async (req, res, next) => {
  try {
    const notifications = await notificationService.getUserNotifications(req.user.id);
    res.status(200).json({ success: true, data: notifications });
  } catch (err) {
    next(err);
  }
};

module.exports = { getNotifications };
