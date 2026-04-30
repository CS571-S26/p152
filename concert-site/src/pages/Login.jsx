import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const result = mode === 'login' ? login(username, password) : register(username, password);
    if (result.ok) {
      navigate(-1);
    } else {
      setError(result.error);
    }
  }

  function switchMode() {
    setMode(m => (m === 'login' ? 'register' : 'login'));
    setError('');
  }

  return (
    <main className="login-page">
      <Container>
      <div className="login-box">
        <h1>{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h1>
        <p className="login-sub">
          {mode === 'login' ? 'Sign in to access your cart' : 'Register to save your cart'}
        </p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              autoComplete="username"
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-btn">
            {mode === 'login' ? 'Sign In' : 'Register'}
          </button>
        </form>
        <p className="login-switch">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button type="button" className="switch-btn" onClick={switchMode}>
            {mode === 'login' ? 'Register' : 'Sign In'}
          </button>
        </p>
      </div>
      </Container>
    </main>
  );
}
