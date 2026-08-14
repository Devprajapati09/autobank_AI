const processPayment = async (userId, amount, recipient) => {
  return { success: true, transactionId: `TXN-${Date.now()}`, amount, recipient, status: 'COMPLETED' };
};

module.exports = { processPayment };
