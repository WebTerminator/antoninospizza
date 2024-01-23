import { useCart } from "@/cart.context";
import { QuantitySelector } from "@/components/QuantitySelector";
import { getProduct } from "@/utils/shopify";
import { useState } from "react";
import styles from "@/styles/Handle.module.css";

function Product(props: any) {
  const { handleAddToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const {
    productByHandle: {
      description,
      title,
      featuredImage: { url },
      ingredients,
      allergens,
      variants,
    },
  } = props;

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
      productId: variants.nodes[0].id,
    };

    handleAddToCart(inputs);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["inner"]}>
        <div className={styles["left"]}>
          <img src={url} alt="Pizza illustration" />
        </div>
        <div className={styles["right"]}>
          <h1 style={{ marginBottom: "20px" }}>{title}</h1>
          <p>{description}</p>
          <p style={{ fontSize: "14px", marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Ingredients:</span>{" "}
            {ingredients.value}
          </p>
          <p style={{ fontSize: "14px", marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Allergens:</span>{" "}
            {allergens.value}
          </p>
          <p style={{ fontSize: "14px" }}>
            <span style={{ fontWeight: "bold" }}>Weight:</span>{" "}
            {variants.nodes[0].weight}gr
          </p>
          <div style={{ marginBottom: "20px" }}>
            <QuantitySelector
              handleQuantityChange={handleQuantityChange}
              setQuantity={setQuantity}
              quantity={quantity}
              defaultPosition="start"
            />
          </div>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "0",
            }}
          >
            £{variants.nodes[0].price.amount}{" "}
            {variants.nodes[0].price.currencyCode}
          </p>
          <button
            className="button"
            style={{
              marginTop: "10px",
            }}
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { handle } }: any) {
  let data = await getProduct({ handle });
  return {
    props: data,
  };
}

export default Product;
