const BASE = '/api/v1'

export async function fetchProducts(category) {
  const params = category ? `?category=${category}` : ''
  const res = await fetch(`${BASE}/products${params}`)
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function fetchProduct(id) {
  const res = await fetch(`${BASE}/products/${id}`)
  if (!res.ok) throw new Error('Product not found')
  return res.json()
}

export async function createOrder(items, paymentMethod = 'credit_card') {
  const res = await fetch(`${BASE}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items, payment_method: paymentMethod }),
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.detail || 'Failed to create order')
  }
  return res.json()
}

export async function fetchOrders() {
  const res = await fetch(`${BASE}/orders`)
  if (!res.ok) throw new Error('Failed to fetch orders')
  return res.json()
}
