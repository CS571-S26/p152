import './TicketCard.css';
export default function TicketCard({ id, tier, price, perks, count, onAdd, onRemove }) {
  return (
    <div className={`ticket-card${id === 'vip' ? ' ticket-card--vip' : ''}`}>
      <div className="ticket-tier">{tier}</div>
      <div className="ticket-price">${price}</div>
      <ul className="ticket-perks">
        {perks.map(perk => (
          <li key={perk}>
            <span className="perk-check">✦</span>{perk}
          </li>
        ))}
      </ul>
      <div className="ticket-qty" role="group" aria-label={`${tier} ticket quantity`}>
        <button
          className="qty-btn"
          onClick={onRemove}
          aria-label={`Remove one ${tier} ticket`}
        >
          −
        </button>
        <span className="qty-count" aria-live="polite" aria-atomic="true">{count}</span>
        <button
          className="qty-btn"
          onClick={onAdd}
          aria-label={`Add one ${tier} ticket`}
        >
          +
        </button>
      </div>
    </div>
  );
}
