import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  // Save cart items to localStorage whenever the cart changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        if (itemExists.quantity < 10) { // Assuming max quantity is 10
          return prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return prevItems; // Return unchanged if max quantity reached
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to update cart items
  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart'); // Also clear localStorage
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
