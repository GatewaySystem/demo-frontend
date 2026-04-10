export default function ProductCard({ product, onAddToCart }) {
  const lowStock = product.inventory_count < 5

  return (
    <div style={{
      border: '1px solid #ddd', borderRadius: '8px', padding: '1rem',
      display: 'flex', flexDirection: 'column', gap: '0.5rem',
    }}>
      <h3 style={{ margin: 0 }}>{product.name}</h3>
      <p style={{ margin: 0, color: '#666', fontSize: '0.85rem' }}>{product.category}</p>
      <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>${product.price.toFixed(2)}</p>
      <p style={{ margin: 0, fontSize: '0.8rem', color: lowStock ? 'red' : '#888' }}>
        {product.inventory_count === 0 ? 'Out of stock' : `${product.inventory_count} in stock`}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        disabled={product.inventory_count === 0}
        style={{
          marginTop: 'auto', padding: '0.5rem', border: 'none', borderRadius: '4px',
          background: product.inventory_count === 0 ? '#ccc' : '#111', color: '#fff', cursor: 'pointer',
        }}
      >
        {product.inventory_count === 0 ? 'Sold Out' : 'Add to Cart'}
      </button>
    </div>
  )
}
