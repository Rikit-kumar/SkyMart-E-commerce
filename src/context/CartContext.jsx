import { createContext, useEffect, useState } from "react";
import { getData, saveData } from "../utils/storage";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const getCartKey = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    return user ? `cart_${user.email}` : "cart_guest";
  };

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser"));
  });

  const [cart, setCart] = useState(() => {
    return getData(getCartKey()) || [];
  });

  useEffect(() => {
    saveData(getCartKey(), cart);
  }, [cart]);

  useEffect(() => {
    setCart(getData(getCartKey()) || []);
  }, [currentUser]);

  useEffect(() => {
    const handleUserChange = () => {
      setCart(getData(getCartKey()) || []);
    };

    window.addEventListener("userChanged", handleUserChange);

    return () => {
      window.removeEventListener("userChanged", handleUserChange);
    };
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item,
      ),
    );
  };

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
