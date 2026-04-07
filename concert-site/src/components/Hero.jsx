import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import './Hero.css';

const CONCERT_DATE = new Date('2026-08-15T20:00:00');

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-ring hero-ring--1" />
      <div className="hero-ring hero-ring--2" />
      <div className="hero-ring hero-ring--3" />
      <div className="hero-content">
        <p className="hero-eyebrow">One Night Only</p>
        <h1 className="hero-title">
          Luna <span className="hero-title--accent">Voss</span>
        </h1>
        <p className="hero-artist">
          <strong>Echoes of the Night</strong> World Tour
        </p>
        <div className="hero-meta">
          <span>August 15, 2026</span>
          <span className="dot">·</span>
          <span>8:00 PM</span>
          <span className="dot">·</span>
          <span>Madison Square Garden, New York</span>
        </div>
        <CountdownTimer targetDate={CONCERT_DATE} />
        <div className="hero-actions">
          <Link to="/tickets" className="btn-primary-gold">Buy Tickets</Link>
          <Link to="/artist" className="btn-ghost">About the Artist</Link>
        </div>
      </div>
    </section>
  );
}
