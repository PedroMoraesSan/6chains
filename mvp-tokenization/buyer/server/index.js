const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { createTransaction, generateTransactionHash } = require('../../shared/utils');

const app = express();
const PORT = 3002;
app.use(cors());
app.use(bodyParser.json());

// Purchase an asset
app.post('/purchase', async (req, res) => {
  const { assetId, buyerId } = req.body;

  try {
    // Fetch the asset from the seller server
    const response = await axios.get(`http://localhost:3001/assets/${assetId}`);
    const asset = response.data;

    // Create a transaction
    const transaction = createTransaction(buyerId, 'seller', asset);
    const hash = generateTransactionHash(transaction);

    // Read the current blockchain
    const chainPath = path.join(__dirname, '../../blockchain/chain.json');
    const chain = JSON.parse(fs.readFileSync(chainPath, 'utf8'));
    
    // Get the previous hash
    const previousHash = chain[chain.length - 1].hash;
    
    // Create a new block
    const block = {
      index: chain.length,
      timestamp: new Date().toISOString(),
      transactions: [transaction],
      previousHash,
      hash
    };

    // Add the block to the chain
    chain.push(block);
    
    // Write the updated chain back to the file
    fs.writeFileSync(chainPath, JSON.stringify(chain, null, 2));

    // Update the asset supply on the seller side (in a real system)
    // This would be a call to the seller's API to update the supply

    res.status(200).json({ 
      message: 'Purchase successful', 
      transactionId: transaction.id,
      hash,
      timestamp: transaction.timestamp
    });
  } catch (error) {
    console.error('Error processing purchase:', error.message);
    res.status(500).json({ 
      message: 'Purchase failed', 
      error: error.message 
    });
  }
});

// Get transaction history for a buyer
app.get('/transactions/:buyerId', (req, res) => {
  const { buyerId } = req.params;
  
  try {
    // Read the blockchain
    const chainPath = path.join(__dirname, '../../blockchain/chain.json');
    const chain = JSON.parse(fs.readFileSync(chainPath, 'utf8'));
    
    // Find all transactions for this buyer
    const transactions = [];
    
    chain.forEach(block => {
      block.transactions.forEach(tx => {
        if (tx.from === buyerId) {
          transactions.push({
            ...tx,
            blockIndex: block.index,
            blockHash: block.hash
          });
        }
      });
    });
    
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Error fetching transactions' });
  }
});

app.listen(PORT, () => {
  console.log(`Buyer server running on http://localhost:${PORT}`);
});
