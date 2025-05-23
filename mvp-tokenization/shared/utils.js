const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

function generateTransactionHash(transaction) {
  const json = JSON.stringify(transaction);
  return crypto.createHash('sha256').update(json).digest('hex');
}

function createTransaction(from, to, asset) {
  const id = uuidv4();
  const timestamp = new Date().toISOString();
  return {
    id,
    from,
    to,
    asset,
    timestamp
  };
}

module.exports = {
  generateTransactionHash,
  createTransaction
};
