import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import TicketCard from '../components/TicketCard';
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
  const [quantities, setQuantities] = useState({ normal: 0, vip: 0 });
  const [confirmed, setConfirmed] = useState(false);
  const totalTickets = TIERS.reduce((sum, t) => sum + quantities[t.id], 0);
  const total = TIERS.reduce((sum, t) => sum + t.price * quantities[t.id], 0);
  function add(id) {
    setQuantities(q => ({ ...q, [id]: q[id] + 1 }));
  }
  function remove(id) {
    setQuantities(q => ({ ...q, [id]: Math.max(0, q[id] - 1) }));
  }
  function handleReset() {
    setConfirmed(false);
    setQuantities({ normal: 0, vip: 0 });
  }
  if (confirmed) {
    return (
      <div className="tickets-page">
        <div className="confirm-box">
          <h2>Order Summary</h2>
          <div className="confirm-details">
            {TIERS.filter(t => quantities[t.id] > 0).map(t => (
              <div key={t.id} className="confirm-row">
                <span>{t.tier} × {quantities[t.id]}</span>
                <strong>${t.price * quantities[t.id]}</strong>
              </div>
            ))}
            <div className="confirm-row confirm-row--total">
              <span>Total</span>
              <strong>${total}</strong>
            </div>
          </div>
          <button className="btn-reset" onClick={handleReset}>Start Over</button>
        </div>
      </div>
    );
  }
  return (
    <div className="tickets-page">
      <header className="tickets-header">
        <h1>Get Your Tickets</h1>
        <p style={{ color: '#000' }}>
          August 15, 2026 · Madison Square Garden, New York
        </p>
      </header>
      <div className="tickets-tiers">
        <Row className="g-4 justify-content-center">
          {TIERS.map(t => (
            <Col key={t.id} xs={12} md={5}>
              <TicketCard
                {...t}
                count={quantities[t.id]}
                onAdd={() => add(t.id)}
                onRemove={() => remove(t.id)}
              />
            </Col>
          ))}
        </Row>
      </div>
      {totalTickets > 0 && (
        <div className="proceed-wrap">
          <button className="submit-btn" onClick={() => setConfirmed(true)}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
