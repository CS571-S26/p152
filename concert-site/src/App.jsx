import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Tickets from './pages/Tickets';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <div style={{ paddingTop: '70px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
