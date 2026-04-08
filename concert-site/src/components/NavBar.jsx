import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar() {
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
              to="/tickets"
              className={({ isActive }) => 'nav-item-link nav-cta' + (isActive ? ' active' : '')}
            >
              Get Tickets
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
