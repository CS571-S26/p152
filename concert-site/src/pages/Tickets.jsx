import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import TicketCard from '../components/TicketCard';
import './Tickets.css';

const TIERS = [
  {
    id: 'ga',
    tier: 'General Admission',
    price: 85,
    perks: [
      'Floor standing area',
      'Full stage view',
      'Digital ticket delivery',
      'Venue access 30 min early',
    ],
  },
  {
    id: 'balcony',
    tier: 'Balcony',
    price: 120,
    badge: 'Most Popular',
    featured: true,
    perks: [
      'Reserved balcony seating',
      'Elevated sightlines',
      'Priority entry',
      'Complimentary program',
    ],
  },
  {
    id: 'vip',
    tier: 'VIP Experience',
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

const QUANTITIES = [1, 2, 3, 4, 5, 6];

export default function Tickets() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [qty, setQty] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', card: '', expiry: '' });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const tier = TIERS.find(t => t.id === selectedTier);
  const total = tier ? tier.price * qty : 0;

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!/^\d{16}$/.test(form.card.replace(/\s/g, ''))) e.card = 'Enter a valid 16-digit card number';
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) e.expiry = 'Format: MM/YY';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setConfirmed(true);
  }

  function handleChange(field, value) {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(err => ({ ...err, [field]: undefined }));
  }

  function handleReset() {
    setConfirmed(false);
    setForm({ name: '', email: '', card: '', expiry: '' });
    setSelectedTier(null);
    setQty(1);
    setErrors({});
  }

  if (confirmed) {
    return (
      <div className="tickets-page">
        <div className="confirm-box">
          <div className="confirm-icon">✓</div>
          <h2>You're In!</h2>
          <p className="confirm-sub">Order Confirmed</p>
          <div className="confirm-details">
            <div className="confirm-row"><span>Name</span><strong>{form.name}</strong></div>
            <div className="confirm-row"><span>Email</span><strong>{form.email}</strong></div>
            <div className="confirm-row"><span>Tier</span><strong>{tier.tier}</strong></div>
            <div className="confirm-row"><span>Quantity</span><strong>{qty}</strong></div>
            <div className="confirm-row confirm-row--total">
              <span>Total Paid</span><strong>${total}</strong>
            </div>
          </div>
          <p className="confirm-note">
            Your tickets will be emailed to {form.email} within 24 hours.
            Please bring a valid photo ID to the venue.
          </p>
          <button className="btn-reset" onClick={handleReset}>Start Over</button>
        </div>
      </div>
    );
  }

  return (
    <div className="tickets-page">
      <header className="tickets-header">
        <h1>Get Your Tickets</h1>
        <p style={{ color: 'var(--muted)' }}>
          August 15, 2026 · Madison Square Garden, New York
        </p>
      </header>

      <div className="tickets-tiers">
        <Row className="g-4 justify-content-center">
          {TIERS.map(t => (
            <Col key={t.id} xs={12} md={4}>
              <TicketCard
                {...t}
                selected={selectedTier === t.id}
                onSelect={() => setSelectedTier(t.id)}
              />
            </Col>
          ))}
        </Row>
      </div>

      {selectedTier && (
        <section className="checkout-section">
          <h2 className="checkout-title">Complete Your Order</h2>
          <form className="checkout-form" onSubmit={handleSubmit} noValidate>

            <div className="form-row">
              <label>Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={e => handleChange('name', e.target.value)}
                className={errors.name ? 'input-error' : ''}
                placeholder="Jane Smith"
              />
              {errors.name && <p className="field-error">{errors.name}</p>}
            </div>

            <div className="form-row">
              <label>Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                className={errors.email ? 'input-error' : ''}
                placeholder="jane@example.com"
              />
              {errors.email && <p className="field-error">{errors.email}</p>}
            </div>

            <div className="form-row">
              <label>Quantity</label>
              <select value={qty} onChange={e => setQty(Number(e.target.value))}>
                {QUANTITIES.map(q => (
                  <option key={q} value={q}>{q} ticket{q > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <label>Card Number</label>
              <input
                type="text"
                value={form.card}
                onChange={e => handleChange('card', e.target.value)}
                className={errors.card ? 'input-error' : ''}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
              {errors.card && <p className="field-error">{errors.card}</p>}
            </div>

            <div className="form-row--half">
              <div className="form-row">
                <label>Expiry</label>
                <input
                  type="text"
                  value={form.expiry}
                  onChange={e => handleChange('expiry', e.target.value)}
                  className={errors.expiry ? 'input-error' : ''}
                  placeholder="MM/YY"
                  maxLength={5}
                />
                {errors.expiry && <p className="field-error">{errors.expiry}</p>}
              </div>
              <div className="form-row">
                <label>CVV</label>
                <input type="text" placeholder="•••" maxLength={4} />
              </div>
            </div>

            <div className="order-summary">
              <span>{qty}× {tier.tier}</span>
              <span className="order-total">${total}</span>
            </div>

            <button type="submit" className="submit-btn">Complete Purchase</button>
          </form>
        </section>
      )}
    </div>
  );
}
