import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext(null);

const EMPTY_CART = { normal: 0, vip: 0 };

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState(EMPTY_CART);

  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`miku_cart_${user}`);
      setCart(saved ? JSON.parse(saved) : { ...EMPTY_CART });
    } else {
      setCart({ ...EMPTY_CART });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`miku_cart_${user}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  function addToCart(id) {
    setCart(c => ({ ...c, [id]: c[id] + 1 }));
  }

  function removeFromCart(id) {
    setCart(c => ({ ...c, [id]: Math.max(0, c[id] - 1) }));
  }

  function clearCart() {
    setCart({ ...EMPTY_CART });
    if (user) localStorage.removeItem(`miku_cart_${user}`);
  }

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
