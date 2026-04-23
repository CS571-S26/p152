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
      <div className="ticket-qty">
        <button className="qty-btn" onClick={onRemove}>−</button>
        <span className="qty-count">{count}</span>
        <button className="qty-btn" onClick={onAdd}>+</button>
      </div>
    </div>
  );
}
