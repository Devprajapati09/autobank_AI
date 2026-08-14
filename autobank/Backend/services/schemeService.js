const Scheme = require('../models/schemeModel');

const getAllSchemes = async () => {
  return await Scheme.find({});
};

module.exports = { getAllSchemes };
