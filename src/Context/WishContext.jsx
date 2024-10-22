import { createContext, useEffect, useState } from 'react';

// Create the context
export const WishlistContext = createContext();

// Provide the context
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist));
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage', error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist]);

  // Add item to wishlist
  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (!isAlreadyInWishlist) {
        return [...prevWishlist, item];
      }

      return prevWishlist; // Return unchanged if item is already in the wishlist
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
