import { Link } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Miku</span>
          <p>August 15, 2026 · Madison Square Garden</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/artist">Artist</Link>
          <Link to="/setlist">Setlist</Link>
          <Link to="/tickets">Tickets</Link>
        </nav>
      </div>
    </footer>
  );
}
