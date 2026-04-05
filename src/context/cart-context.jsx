import * as React from "react";

const CartContext = React.createContext(undefined);

export const CartProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);

  const addToCart = React.useCallback((product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (!existingItem) {
        return [...prevItems, { ...product, quantity: 1 }];
      }

      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }, []);

  const removeFromCart = React.useCallback((productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, []);

  const cartCount = React.useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const isInCart = React.useCallback(
    (productId) => items.some((item) => item.id === productId),
    [items],
  );

  const value = React.useMemo(
    () => ({
      items,
      cartCount,
      addToCart,
      removeFromCart,
      isInCart,
    }),
    [items, cartCount, addToCart, removeFromCart, isInCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
