import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1.5rem', padding: '1rem 2rem', background: '#111', color: '#fff', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>
        Demo Store
      </Link>
      <Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>Products</Link>
      <Link to="/cart" style={{ color: '#ccc', textDecoration: 'none' }}>Cart</Link>
      <Link to="/orders" style={{ color: '#ccc', textDecoration: 'none' }}>Orders</Link>
    </nav>
  )
}
