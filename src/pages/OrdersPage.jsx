import { useState, useEffect } from 'react'
import OrderStatus from '../components/OrderStatus'
import { fetchOrders } from '../services/api'

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
      .then((data) => setOrders(data.orders || []))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1>Orders</h1>
      {loading && <p>Loading orders...</p>}
      {!loading && orders.length === 0 && <p style={{ color: '#888' }}>No orders yet.</p>}
      {orders.map((o) => (
        <OrderStatus key={o.id} order={o} />
      ))}
    </div>
  )
}
