import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/api'

export default function HomePage({ onAddToCart }) {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchProducts(category || undefined)
      .then((data) => { setProducts(data.products); setError(null) })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [category])

  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home', 'Sports']

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c === 'All' ? '' : c)}
            style={{
              padding: '0.4rem 1rem', borderRadius: '20px', border: '1px solid #ddd',
              background: (c === 'All' && !category) || c === category ? '#111' : '#fff',
              color: (c === 'All' && !category) || c === category ? '#fff' : '#333',
              cursor: 'pointer',
            }}
          >
            {c}
          </button>
        ))}
      </div>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  )
}
