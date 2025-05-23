const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const { createTransaction, generateTransactionHash } = require('../../shared/utils');

const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());

// Store assets in memory for this MVP
let assets = [];

// Create a new digital asset
app.post('/create-asset', (req, res) => {
  const { name, description, price, supply } = req.body;
  const asset = {
    id: Date.now().toString(),
    name,
    description,
    price,
    supply,
    createdAt: new Date().toISOString()
  };
  assets.push(asset);
  
  // Save assets to a file for persistence between restarts
  fs.writeFileSync(path.join(__dirname, '../../seller/assets.json'), JSON.stringify(assets, null, 2));
  
  res.status(201).json(asset);
});

// Get all available assets
app.get('/assets', (req, res) => {
  res.json(assets);
});

// Get a specific asset by ID
app.get('/assets/:id', (req, res) => {
  const asset = assets.find(a => a.id === req.params.id);
  if (!asset) {
    return res.status(404).json({ message: 'Asset not found' });
  }
  res.json(asset);
});

// Load assets from file if it exists
try {
  const assetsPath = path.join(__dirname, '../../seller/assets.json');
  if (fs.existsSync(assetsPath)) {
    const data = fs.readFileSync(assetsPath, 'utf8');
    assets = JSON.parse(data);
    console.log('Loaded assets from file');
  }
} catch (error) {
  console.error('Error loading assets:', error);
}

app.listen(PORT, () => {
  console.log(`Seller server running on http://localhost:${PORT}`);
});
