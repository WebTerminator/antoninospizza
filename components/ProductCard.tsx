import styles from "@/styles/Shop.module.css";
import { QuantitySelector } from "@/components/QuantitySelector";
import { useState } from "react";
import { useCart } from "@/cart.context";
import Link from "next/link";

export const ProductCard = ({ featuredImage, id, title, variants, handle }: any) => {
  const { handleAddToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = ({
    action,
  }: {
    action: "increment" | "decrement";
  }) => {
    if (action === "increment") {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 0) return;

      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const inputs = {
      quantity: quantity.toString(),
      productId: variants.edges[0].node.id,
    };

    handleAddToCart(inputs);
  };
  return (
    <div className={styles["product-wrapper"]} key={id}>
      <div
        style={{
          display: "flex",
          justifyContent: " center",
          marginBottom: "20px",
        }}
      >
        <Link
          href={`/${handle}`}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src={featuredImage?.url} alt="pizza" />
        </Link>
      </div>
      <p style={{ fontSize: "1rem", marginBottom: "10px", fontWeight: "bold" }}>
        {title}
      </p>
      <p
        style={{
          fontSize: ".9rem",
          margin: "0 0 20px 0",
        }}
      >
        £{variants.edges[0].node.price.amount}
      </p>
      <div
        style={{ display: "flex", justifyContent: " center", alignItems: "" }}
      >
        <div style={{ width: "120px" }}>
          <QuantitySelector
            handleQuantityChange={handleQuantityChange}
            setQuantity={setQuantity}
            quantity={quantity}
          />
        </div>
        <button
          className="button"
          style={{
            marginBottom: "0",
          }}
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
