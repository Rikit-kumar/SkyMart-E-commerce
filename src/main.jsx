import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import CartProvider from "./context/CartContext";
import "./index.css";
import App from "./App.jsx";
import WishlistProvider from "./context/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </BrowserRouter>,
);
