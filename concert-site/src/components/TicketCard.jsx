import './TicketCard.css';

export default function TicketCard({ tier, price, perks, badge, featured, selected, onSelect }) {
  return (
    <div
      className={
        'ticket-card' +
        (featured ? ' ticket-card--featured' : '') +
        (selected ? ' ticket-card--selected' : '')
      }
      onClick={onSelect}
    >
      {badge && <div className="ticket-badge">{badge}</div>}
      <div className="ticket-tier">{tier}</div>
      <div className="ticket-price">
        <span className="ticket-dollar">$</span>{price}
      </div>
      <ul className="ticket-perks">
        {perks.map(perk => (
          <li key={perk}>
            <span className="perk-check">✦</span>{perk}
          </li>
        ))}
      </ul>
      <button className={'ticket-btn' + (selected ? ' ticket-btn--selected' : '')}>
        {selected ? 'Selected ✓' : 'Select'}
      </button>
    </div>
  );
}
