import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">♪ Luna Voss</span>
          <p>Echoes of the Night World Tour · August 15, 2026</p>
        </div>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/artist">Artist</Link>
          <Link to="/tickets">Tickets</Link>
        </nav>
        <p className="footer-copy">© 2026 Luna Voss Tour. All rights reserved.</p>
      </div>
    </footer>
  );
}
