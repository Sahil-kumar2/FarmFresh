import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (crop) => {
    setCart(prev => {
      const exists = prev.find(i => i._id === crop._id);
      if (exists) {
        return prev.map(i =>
          i._id === crop._id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...crop, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(i => i._id === id ? { ...i, qty: i.qty + 1 } : i)
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(i =>
          i._id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter(i => i.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
