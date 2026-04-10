import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from '../components/Cart'
import { createOrder } from '../services/api'

export default function CartPage({ cartItems, onRemoveFromCart, onClearCart }) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const navigate = useNavigate()

  const handleCheckout = async () => {
    setLoading(true)
    setResult(null)
    try {
      const items = cartItems.map((i) => ({ product_id: i.product_id, quantity: i.quantity }))
      const order = await createOrder(items)
      setResult(order)
      onClearCart()
      setTimeout(() => navigate('/orders'), 2000)
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {result && !result.error && (
        <div style={{ padding: '1rem', background: '#f0fdf4', border: '1px solid #22c55e', borderRadius: '8px', marginBottom: '1rem' }}>
          Order <strong>{result.id}</strong> placed! Status: <strong>{result.status}</strong>. Redirecting to orders...
        </div>
      )}
      {result?.error && (
        <div style={{ padding: '1rem', background: '#fef2f2', border: '1px solid #ef4444', borderRadius: '8px', marginBottom: '1rem' }}>
          Error: {result.error}
        </div>
      )}
      <Cart items={cartItems} onRemove={onRemoveFromCart} onCheckout={handleCheckout} loading={loading} />
    </div>
  )
}
