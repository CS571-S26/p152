import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem('miku_user'));

  function register(username, password) {
    const users = JSON.parse(localStorage.getItem('miku_users') || '[]');
    if (users.find(u => u.username === username)) {
      return { ok: false, error: 'Username already taken' };
    }
    users.push({ username, password });
    localStorage.setItem('miku_users', JSON.stringify(users));
    localStorage.setItem('miku_user', username);
    setUser(username);
    return { ok: true };
  }

  function login(username, password) {
    const users = JSON.parse(localStorage.getItem('miku_users') || '[]');
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) return { ok: false, error: 'Invalid username or password' };
    localStorage.setItem('miku_user', username);
    setUser(username);
    return { ok: true };
  }

  function logout() {
    localStorage.removeItem('miku_user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
