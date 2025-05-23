import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [assets, setAssets] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    supply: ''
  })
  const [message, setMessage] = useState({ text: '', type: '' })

  useEffect(() => {
    fetchAssets()
  }, [])

  const fetchAssets = async () => {
    try {
      const response = await axios.get('http://localhost:3001/assets')
      setAssets(response.data)
    } catch (error) {
      console.error('Error fetching assets:', error)
      setMessage({ text: 'Failed to load assets', type: 'danger' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.description || !formData.price || !formData.supply) {
      setMessage({ text: 'All fields are required', type: 'danger' })
      return
    }

    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        supply: parseInt(formData.supply)
      }
      
      const response = await axios.post('http://localhost:3001/create-asset', payload)
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        supply: ''
      })
      
      // Update assets list
      setAssets([...assets, response.data])
      
      setMessage({ text: 'Asset created successfully!', type: 'success' })
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage({ text: '', type: '' })
      }, 3000)
    } catch (error) {
      console.error('Error creating asset:', error)
      setMessage({ text: 'Failed to create asset', type: 'danger' })
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Seller Portal</h1>
        <div className="badge badge-primary">Tokenization MVP</div>
      </header>
      
      {message.text && (
        <div className={`alert alert-${message.type}`}>
          {message.text}
        </div>
      )}
      
      <div className="card">
        <h2>Create New Digital Asset</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Asset Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Rare Digital Artwork"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your digital asset"
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="price">Price (in tokens)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 50"
              min="0"
              step="0.01"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="supply">Supply</label>
            <input
              type="number"
              id="supply"
              name="supply"
              value={formData.supply}
              onChange={handleChange}
              placeholder="e.g., 10"
              min="1"
            />
          </div>
          
          <button type="submit" className="btn-success">Create Asset</button>
        </form>
      </div>
      
      <h2>Your Digital Assets</h2>
      {assets.length === 0 ? (
        <p>No assets created yet. Create your first digital asset above!</p>
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
                <p><strong>Created:</strong> {new Date(asset.createdAt).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
