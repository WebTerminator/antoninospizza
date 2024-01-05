import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/cart.context";
import { useState } from "react";
import { CartItems } from "@/components/CartItems";

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
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            right: isShoppingCartVisible ? "0" : "-300px",
            height: "100vh",
            width: "300px",
            position: "fixed",
            top: "0",
            zIndex: 100,
            transition: "all 0.3s ease-in-out",
            borderLeft: "1px solid #ccc",
          }}
        >
          <div
            className="flex"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "0",
              }}
            >
              Cart
            </p>
            <button
              onClick={handleToggleCart}
              style={{
                appearance: "none",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "20px",
                }}
                src="icons/close.svg"
                alt="close cart icon"
              />
            </button>
          </div>

          <CartItems />
        </div>

        <Header toggleShoppingCart={handleToggleCart} />
        <Component {...pageProps} />
      </CartProvider>
      <Footer />
    </div>
  );
}
