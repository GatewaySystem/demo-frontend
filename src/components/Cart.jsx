export default function Cart({ items, onRemove, onCheckout, loading }) {
  if (items.length === 0) {
    return <p style={{ color: '#888' }}>Your cart is empty.</p>
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
            <th style={{ padding: '0.5rem' }}>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product_id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '0.5rem' }}>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => onRemove(item.product_id)} style={{ cursor: 'pointer' }}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Total: ${total.toFixed(2)}</strong>
        <button
          onClick={onCheckout}
          disabled={loading}
          style={{
            padding: '0.75rem 2rem', background: '#111', color: '#fff',
            border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem',
          }}
        >
          {loading ? 'Processing...' : 'Checkout'}
        </button>
      </div>
    </div>
  )
}
