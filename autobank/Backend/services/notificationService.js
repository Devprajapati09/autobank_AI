const Notification = require('../models/notificationModel');

const getUserNotifications = async (userId) => {
  return await Notification.find({ userId }).sort({ createdAt: -1 });
};

const createNotification = async (userId, title, message, type = 'info') => {
  return await Notification.create({ userId, title, message, type });
};

module.exports = { getUserNotifications, createNotification };
