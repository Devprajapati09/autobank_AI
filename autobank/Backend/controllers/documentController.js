const documentService = require('../services/documentService');

const upload = async (req, res, next) => {
  try {
    const { title, fileType } = req.body;
    const fileUrl = req.file ? `/uploads/documents/${req.file.filename}` : req.body.fileUrl;
    const result = await documentService.uploadDocument(req.user.id, title, fileType, fileUrl);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

const getDocs = async (req, res, next) => {
  try {
    const docs = await documentService.getDocuments(req.user.id);
    res.status(200).json({ success: true, data: docs });
  } catch (err) {
    next(err);
  }
};

module.exports = { upload, getDocs };
