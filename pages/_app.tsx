import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/cart.context";
import { useState } from "react";
import { Cart } from "@/components/Cart";

export default function App({ Component, pageProps }: AppProps) {
  const [isShoppingCartVisible, toggleShoppingCart] = useState(false);

  const handleToggleCart = () => toggleShoppingCart(!isShoppingCartVisible);

  return (
    <div className="container">
      <div
        onClick={handleToggleCart}
        style={{
          position: "fixed",
          left: "0",
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: isShoppingCartVisible ? 99 : -1,
          opacity: isShoppingCartVisible ? 1 : 0,
        }}
      />
      <CartProvider>
        <Cart
          handleToggleCart={handleToggleCart}
          isShoppingCartVisible={isShoppingCartVisible}
        />

        <Header toggleShoppingCart={handleToggleCart} />
        <Component {...pageProps} />
      </CartProvider>

      <Footer />
    </div>
  );
}
