import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider, useCart } from "@/cart.context";
import { useState } from "react";
import { CartItems } from "@/components/CartItems";

import styles from "@/styles/Cart.module.css";
export default function App({ Component, pageProps }: AppProps) {
  const [isShoppingCartVisible, toggleShoppingCart] = useState(false);
  const { items } = useCart();
  console.log(items);

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
          className={styles["cart-wrapper"]}
          style={{
            right: isShoppingCartVisible ? "0" : "-420px",
          }}
        >
          <div
            className="flex"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
              borderBottom: "1px solid black",
              paddingBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "semi-bold",
                marginBottom: "0",
              }}
            >
              Cart ({items.length})
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
