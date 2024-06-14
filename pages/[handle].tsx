import { useState } from "react";
import { useCart } from "@/cart.context";
import { QuantitySelector } from "@/components/QuantitySelector";
import { getProduct } from "@/utils/shopify";
import { GetProductResponse } from "@/utils/queries";
import styles from "@/styles/Handle.module.css";
import { Instructions } from "@/components/Instructions";
import { Img } from "@/components/Img";

const ProductInfo = ({
  label,
  value,
  iconUrl,
  href,
}: {
  label: string;
  value?: string;
  iconUrl: string;
  href?: string;
}) => (
  <>
    <div style={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
      <img style={{ width: "20px" }} src={iconUrl} />
      {href ? (
        <a
          href={href}
          target="_blank"
          style={{ fontSize: "14px", marginBottom: "0", fontWeight: "bold" }}
        >
          {label}
        </a>
      ) : (
        <p style={{ fontSize: "14px", marginBottom: "0", fontWeight: "bold" }}>
          {label}
        </p>
      )}
    </div>
    <p style={{ fontSize: "14px" }}>{value}</p>
  </>
);

function Product(props: GetProductResponse) {
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
      dimensions,
      technical_sheet,
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
          <Img url={url} alt="Pizza illustration" />
        </div>
        <div className={styles["right"]}>
          <h2 style={{ marginBottom: "32px", textAlign: "left" }}>{title}</h2>
          <p
            style={{
              fontSize: "24px",
              lineHeight: "32px",
              marginBottom: "32px",
            }}
          >
            £{variants.nodes[0].price.amount}{" "}
            {variants.nodes[0].price.currencyCode}
          </p>

          <div className={styles["actions-wrapper"]}>
            <QuantitySelector
              handleQuantityChange={handleQuantityChange}
              quantity={quantity}
            />

            <button className="button" onClick={addToCart}>
              Add to cart
            </button>
          </div>
          <p>{description}</p>

          <ProductInfo
            label="Ingredients"
            value={ingredients.value}
            iconUrl="icons/bowl.svg"
          />
          <ProductInfo
            label="Allergens"
            value={allergens.value}
            iconUrl="icons/boy.svg"
          />
          <ProductInfo
            label="Weight"
            value={`${variants.nodes[0].weight} gr`}
            iconUrl="icons/time.svg"
          />

          <ProductInfo
            label="Dimensions"
            value={dimensions.value}
            iconUrl="icons/size.svg"
          />

          <ProductInfo
            label="Technical sheet"
            iconUrl="icons/link.svg"
            href={technical_sheet.reference.url}
          />
        </div>
      </div>
      <div style={{ marginBottom: "60px" }}>
        <Instructions />
      </div>
    </div>
  );
}

export async function getServerSideProps({
  query: { handle },
}: {
  query: { handle: string };
}) {
  return {
    props: await getProduct({ handle }),
  };
}

export default Product;
