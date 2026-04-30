import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import TicketCard from '../components/TicketCard';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Tickets.css';

const TIERS = [
  {
    id: 'normal',
    tier: 'Normal',
    price: 85,
    perks: [
      'Floor standing area',
      'Full stage view',
      'Digital ticket delivery',
      'Venue access 30 min early',
    ],
  },
  {
    id: 'vip',
    tier: 'VIP',
    price: 275,
    perks: [
      'Front-floor priority access',
      'Pre-show meet & greet',
      'Exclusive merch bundle',
      'Dedicated VIP lounge',
      'Commemorative laminate pass',
    ],
  },
];

export default function Tickets() {
  const { user } = useAuth();
  const { cart, addToCart, removeFromCart, totalItems } = useCart();
  const navigate = useNavigate();

  function handleAdd(id) {
    if (!user) {
      navigate('/login');
      return;
    }
    addToCart(id);
  }

  function handleRemove(id) {
    if (!user) return;
    removeFromCart(id);
  }

  return (
    <main className="tickets-page">
      <header className="tickets-header">
        <h1>Get Your Tickets</h1>
        <p>August 15, 2026 · Madison Square Garden, New York</p>
        {!user && (
          <p className="tickets-login-hint">
            <button className="tickets-login-link" onClick={() => navigate('/login')}>
              Sign in
            </button>{' '}
            to save tickets to your cart
          </p>
        )}
      </header>

      <div className="tickets-tiers">
        <Row className="g-4 justify-content-center">
          {TIERS.map(t => (
            <Col key={t.id} xs={12} md={5}>
              <TicketCard
                {...t}
                count={user ? cart[t.id] : 0}
                onAdd={() => handleAdd(t.id)}
                onRemove={() => handleRemove(t.id)}
              />
            </Col>
          ))}
        </Row>
      </div>

      {user && totalItems > 0 && (
        <div className="proceed-wrap">
          <button className="submit-btn" onClick={() => navigate('/cart')}>
            View Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </button>
        </div>
      )}
    </main>
  );
}
