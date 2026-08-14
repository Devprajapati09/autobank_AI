const aiService = require('../services/aiService');

const chat = async (req, res, next) => {
  try {
    const { message, agentType } = req.body;
    const result = await aiService.handleAiChat(req.user.id, message, agentType);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

const getHistory = async (req, res, next) => {
  try {
    const history = await aiService.getChatHistory(req.user.id);
    res.status(200).json({ success: true, data: history });
  } catch (err) {
    next(err);
  }
};

module.exports = { chat, getHistory };
