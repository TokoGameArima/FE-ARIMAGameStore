import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (game) => {
    if (!cartItems.some((item) => item._id === game._id)) {
      setCartItems([...cartItems, game]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const clearCart = () => setCartItems([]);

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};
