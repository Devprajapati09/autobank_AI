const parseFinancialDocument = async (filePath) => {
  return { success: true, parsedData: { type: 'Bank Statement', bank: 'AutoBank', period: 'July 2026' } };
};
module.exports = { parseFinancialDocument };
