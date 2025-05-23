import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [assets, setAssets] = useState([])
  const [transactions, setTransactions] = useState([])
  const [buyerId, setBuyerId] = useState('buyer-' + Math.floor(Math.random() * 1000))
  const [activeTab, setActiveTab] = useState('marketplace')
  const [message, setMessage] = useState({ text: '', type: '' })
  const [purchaseSuccess, setPurchaseSuccess] = useState(null)

  useEffect(() => {
    fetchAssets()
  }, [])

  useEffect(() => {
    if (buyerId) {
      fetchTransactions()
    }
  }, [buyerId])

  const fetchAssets = async () => {
    try {
      const response = await axios.get('http://localhost:3001/assets')
      setAssets(response.data)
    } catch (error) {
      console.error('Error fetching assets:', error)
      setMessage({ text: 'Failed to load marketplace assets', type: 'danger' })
    }
  }

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/transactions/${buyerId}`)
      setTransactions(response.data)
    } catch (error) {
      console.error('Error fetching transactions:', error)
      setMessage({ text: 'Failed to load transaction history', type: 'danger' })
    }
  }

  const handleBuyerIdChange = (e) => {
    setBuyerId(e.target.value)
  }

  const handlePurchase = async (assetId) => {
    try {
      const response = await axios.post('http://localhost:3002/purchase', {
        assetId,
        buyerId
      })
      
      setPurchaseSuccess({
        message: 'Purchase successful!',
        transactionId: response.data.transactionId,
        hash: response.data.hash,
        timestamp: response.data.timestamp
      })
      
      // Refresh transactions
      fetchTransactions()
      
      // Clear success message after 10 seconds
      setTimeout(() => {
        setPurchaseSuccess(null)
      }, 10000)
    } catch (error) {
      console.error('Error purchasing asset:', error)
      setMessage({ 
        text: `Purchase failed: ${error.response?.data?.message || error.message}`, 
        type: 'danger' 
      })
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setMessage({ text: '', type: '' })
      }, 5000)
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Buyer Portal</h1>
        <div className="badge badge-primary">Tokenization MVP</div>
      </header>
      
      {message.text && (
        <div className={`alert alert-${message.type}`}>
          {message.text}
        </div>
      )}
      
      <div className="card">
        <h2>Your Buyer Identity</h2>
        <div className="form-group buyer-id-input">
          <label htmlFor="buyerId">Your Buyer ID</label>
          <input
            type="text"
            id="buyerId"
            value={buyerId}
            onChange={handleBuyerIdChange}
            placeholder="Enter your buyer ID"
          />
          <p><small>This ID will be used to track your purchases on the simulated blockchain</small></p>
        </div>
      </div>
      
      {purchaseSuccess && (
        <div className="purchase-success">
          <h3>{purchaseSuccess.message}</h3>
          <div className="transaction-details">
            <p><strong>Transaction ID:</strong> {purchaseSuccess.transactionId}</p>
            <p><strong>Timestamp:</strong> {new Date(purchaseSuccess.timestamp).toLocaleString()}</p>
            <p><strong>Transaction Hash:</strong></p>
            <div className="hash-container">
              {purchaseSuccess.hash}
            </div>
            <p><small>This hash is stored in the blockchain as proof of your purchase</small></p>
          </div>
        </div>
      )}
      
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'marketplace' ? 'active' : ''}`}
          onClick={() => setActiveTab('marketplace')}
        >
          Marketplace
        </div>
        <div 
          className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
          onClick={() => setActiveTab('transactions')}
        >
          My Transactions
        </div>
      </div>
      
      {activeTab === 'marketplace' ? (
        <>
          <h2>Available Digital Assets</h2>
          {assets.length === 0 ? (
            <p>No assets available in the marketplace. Please check back later!</p>
          ) : (
            <div className="asset-grid">
              {assets.map((asset) => (
                <div key={asset.id} className="asset-card">
                  <h3>{asset.name}</h3>
                  <p>{asset.description}</p>
                  <div className="asset-details">
                    <p><strong>Price:</strong> {asset.price} tokens</p>
                    <p><strong>Supply:</strong> {asset.supply}</p>
                    <p><strong>ID:</strong> {asset.id}</p>
                  </div>
                  <button 
                    className="btn-success purchase-button"
                    onClick={() => handlePurchase(asset.id)}
                  >
                    Purchase
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <h2>Your Transaction History</h2>
          {transactions.length === 0 ? (
            <p>You haven't made any purchases yet. Visit the marketplace to buy digital assets!</p>
          ) : (
            <div className="transaction-history">
              {transactions.map((tx) => (
                <div key={tx.id} className="card transaction-item">
                  <h3>Purchased: {tx.asset.name}</h3>
                  <p>{tx.asset.description}</p>
                  <p><strong>Price:</strong> {tx.asset.price} tokens</p>
                  <p><strong>Transaction ID:</strong> {tx.id}</p>
                  <p><strong>Timestamp:</strong> {new Date(tx.timestamp).toLocaleString()}</p>
                  <p><strong>Block:</strong> {tx.blockIndex}</p>
                  <p><strong>Transaction Hash:</strong></p>
                  <div className="transaction-hash">{tx.blockHash}</div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App
