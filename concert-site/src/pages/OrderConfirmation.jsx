import { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderConfirmation.css';

export default function OrderConfirmation() {
  const [orderNumber] = useState(() => 'MK-' + Math.floor(100000 + Math.random() * 900000));

  return (
    <main className="confirmation-page">
      <div className="confirmation-box">
        <div className="confirmation-check">✓</div>
        <h1>Order Confirmed!</h1>
        <p className="confirmation-sub">Your tickets have been successfully purchased.</p>
        <div className="confirmation-order-num">Order #{orderNumber}</div>
        <div className="confirmation-event">
          <p className="confirmation-event-title">Hatsune Miku Live 2026</p>
          <p className="confirmation-event-detail">August 15, 2026 · Madison Square Garden, New York</p>
        </div>
        <p className="confirmation-email">
          A confirmation email will be sent to your inbox shortly.
        </p>
        <Link to="/" className="btn-primary-gold">Back to Home</Link>
      </div>
    </main>
  );
}
