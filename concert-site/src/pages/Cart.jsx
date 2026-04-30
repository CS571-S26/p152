import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Cart.css';

const TIERS = [
  { id: 'normal', tier: 'Normal', price: 85 },
  { id: 'vip', tier: 'VIP', price: 275 },
];

export default function Cart() {
  const { user } = useAuth();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (!user) {
    return (
      <main className="cart-page">
        <div className="cart-empty-box">
          <h1>Sign In Required</h1>
          <p>Please sign in to view your cart.</p>
          <button className="cart-cta-btn" onClick={() => navigate('/login')}>
            Sign In
          </button>
        </div>
      </main>
    );
  }

  const items = TIERS.filter(t => cart[t.id] > 0);
  const total = TIERS.reduce((sum, t) => sum + t.price * cart[t.id], 0);

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-empty-box">
          <h1>Your Cart is Empty</h1>
          <p>Browse tickets and add them to your cart.</p>
          <button className="cart-cta-btn" onClick={() => navigate('/tickets')}>
            Browse Tickets
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <header className="cart-header">
        <h1>Your Cart</h1>
        <p>
          Signed in as <span className="cart-username">{user}</span>
        </p>
      </header>

      <Container>
        <div className="cart-content">
          <div className="cart-items">
            {items.map(t => (
              <div key={t.id} className={`cart-item${t.id === 'vip' ? ' cart-item--vip' : ''}`}>
                <div className="cart-item-info">
                  <span className="cart-item-name">{t.tier} Ticket</span>
                  <span className="cart-item-price">${t.price} each</span>
                </div>
                <div className="cart-item-qty" role="group" aria-label={`${t.tier} ticket quantity`}>
                  <button
                    className="cart-qty-btn"
                    onClick={() => removeFromCart(t.id)}
                    aria-label={`Remove one ${t.tier} ticket`}
                  >
                    −
                  </button>
                  <span className="cart-qty-count" aria-live="polite" aria-atomic="true">
                    {cart[t.id]}
                  </span>
                  <button
                    className="cart-qty-btn"
                    onClick={() => addToCart(t.id)}
                    aria-label={`Add one ${t.tier} ticket`}
                  >
                    +
                  </button>
                </div>
                <span className="cart-item-subtotal" aria-label={`Subtotal $${t.price * cart[t.id]}`}>
                  ${t.price * cart[t.id]}
                </span>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total-row">
              <span>Total</span>
              <strong aria-label={`Total $${total}`}>${total}</strong>
            </div>
            <button className="cart-submit-btn" onClick={() => { clearCart(); navigate('/order-confirmation'); }}>
              Checkout
            </button>
            <button className="cart-clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}
