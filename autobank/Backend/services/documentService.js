const Document = require('../models/documentModel');

const uploadDocument = async (userId, title, fileType, fileUrl) => {
  return await Document.create({ userId, title, fileType, fileUrl });
};

const getDocuments = async (userId) => {
  return await Document.find({ userId });
};

module.exports = { uploadDocument, getDocuments };
