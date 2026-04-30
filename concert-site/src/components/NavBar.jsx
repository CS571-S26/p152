import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './NavBar.css';

export default function NavBar() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <Navbar expand="md" className="site-navbar" fixed="top">
      <Container fluid="lg">
        <NavLink to="/" className="brand navbar-brand">
          Miku
        </NavLink>
        <Navbar.Toggle className="nav-toggle" aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center">
            <NavLink
              to="/"
              end
              className={({ isActive }) => 'nav-item-link' + (isActive ? ' active' : '')}
            >
              Home
            </NavLink>
            <NavLink
              to="/artist"
              className={({ isActive }) => 'nav-item-link' + (isActive ? ' active' : '')}
            >
              Artist
            </NavLink>
            <NavLink
              to="/setlist"
              className={({ isActive }) => 'nav-item-link' + (isActive ? ' active' : '')}
            >
              Setlist
            </NavLink>
            <NavLink
              to="/tickets"
              className={({ isActive }) => 'nav-item-link nav-cta' + (isActive ? ' active' : '')}
            >
              Get Tickets
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) => 'nav-item-link nav-cart' + (isActive ? ' active' : '')}
              aria-label="Cart"
            >
              <span className="cart-icon">🛒</span>
              {user && totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </NavLink>

            {user ? (
              <div className="nav-user">
                <span className="nav-username">{user}</span>
                <button className="nav-logout-btn" onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => 'nav-item-link nav-login' + (isActive ? ' active' : '')}
              >
                Sign In
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
