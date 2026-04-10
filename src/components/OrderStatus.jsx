const STATUS_COLORS = {
  confirmed: '#22c55e',
  payment_failed: '#ef4444',
  cancelled: '#f59e0b',
  pending: '#6b7280',
}

export default function OrderStatus({ order }) {
  const color = STATUS_COLORS[order.status] || '#6b7280'

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>{order.id}</strong>
        <span style={{ color, fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem' }}>
          {order.status}
        </span>
      </div>
      <p style={{ margin: '0.5rem 0', color: '#666', fontSize: '0.85rem' }}>
        {order.items.length} item(s) &middot; ${order.total.toFixed(2)}
      </p>
      <p style={{ margin: 0, color: '#999', fontSize: '0.75rem' }}>
        {new Date(order.created_at).toLocaleString()}
      </p>
    </div>
  )
}
