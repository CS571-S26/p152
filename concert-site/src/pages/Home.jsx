import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Home.css';
const schedule = [
  { time: '6:00 PM', act: 'Doors Open' },
  { time: '7:00 PM', act: 'Opening Act' },
  { time: '8:00 PM', act: 'Performance Start' },
  { time: '10:30 PM', act: 'Encore' },
  { time: '11:00 PM', act: 'Show End' },
];
const faqs = [
  { q: 'What is the bag policy?',
    a: 'Clear bags only, no larger than 12" × 6" × 12". Small clutches under 5" × 9" are permitted.' },
  { q: 'Is there a re-entry policy?',
    a: 'Re-entry is not permitted once you exit the venue. Please plan accordingly.' },
  { q: 'Are cameras allowed?',
    a: 'Personal cameras with lenses under 3" are permitted. Professional recording equipment is not allowed.' },
  { q: 'Where do I pick up will-call tickets?',
    a: 'Will-call is at the main box office. Bring a valid photo ID and the card used for purchase.' },
  { q: 'Is the venue accessible?',
    a: 'Yes. Accessible entrances, seating, and restrooms are available. Contact us in advance for accommodations.' },
  { q: 'What if the event is cancelled?',
    a: 'All ticket holders will be contacted via email and issued a full refund within 5–7 business days.' },
];
export default function Home() {
  return (
    <main>
      <Hero />
      <section className="home-section">
        <div className="home-section__inner">
          <h2>Event Schedule</h2>
          <div className="schedule-list">
            {schedule.map(item => (
              <div key={item.time} className="schedule-row">
                <span className="schedule-time">{item.time}</span>
                <div className="schedule-divider" />
                <div className="schedule-info">
                  <strong>{item.act}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="home-section home-section--dark faq-section">
        <div className="home-section__inner">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map(faq => (
              <div key={faq.q} className="faq-card">
                <p className="faq-q">{faq.q}</p>
                <p className="faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <p className="cta-eyebrow">Limited Availability</p>
        <h2>Don't Miss Your Chance</h2>
        <Link to="/tickets" className="btn-primary-gold">Get Tickets Now</Link>
      </section>
    </main>
  );
}
