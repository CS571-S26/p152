import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Tickets from './pages/Tickets';
import Setlist from './pages/Setlist';
import Login from './pages/Login';
import Cart from './pages/Cart';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <CartProvider>
          <NavBar />
          <div style={{ paddingTop: '70px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/setlist" element={<Setlist />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
