import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import OrdersPage from './pages/OrdersPage'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product_id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product_id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { product_id: product.id, name: product.name, price: product.price, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((i) => i.product_id !== productId))
  }

  const clearCart = () => setCartItems([])

  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} onRemoveFromCart={removeFromCart} onClearCart={clearCart} />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
