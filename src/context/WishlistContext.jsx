import { createContext, useEffect, useState } from "react";
import { getData, saveData } from "../utils/storage";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const getWishlistKey = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) return "wishlist_guest";

    return `wishlist_${user.email}`;
  };

  const [wishlist, setWishlist] = useState(() => {
    return getData(getWishlistKey()) || [];
  });

  useEffect(() => {
    saveData(getWishlistKey(), wishlist);
  }, [wishlist]);

  useEffect(() => {
    const handleUserChange = () => {
      setWishlist(getData(getWishlistKey()) || []);
    };

    window.addEventListener("userChanged", handleUserChange);

    return () => {
      window.removeEventListener("userChanged", handleUserChange);
    };
  }, []);

  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
