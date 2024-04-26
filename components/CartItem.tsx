import { QuantitySelector } from "./QuantitySelector";
import { useCart } from "@/cart.context";
import styles from "@/styles/Cart.module.css";
import Image from "next/image";

export const CartItem = ({ el }: any) => {
  const { handleUpdateExistingCartLines, handleRemoveCartLine, totalPrice } =
    useCart();

  const handleQuantityChange = ({
    action,
  }: {
    action: "increment" | "decrement";
  }) => {
    if (action === "increment") {
      handleUpdateExistingCartLines({
        quantity: (el.quantity + 1).toString(),
        mainId: el.id,
      });
    } else {
      const quantity = el.quantity - 1;
      if (quantity === 0) {
        handleRemoveCartLine({ lineIds: [el.id] });
      } else
        handleUpdateExistingCartLines({
          quantity: quantity.toString(),
          mainId: el.id,
        });
    }
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <div style={{ flex: 1 }}>
          <Image
            className={styles["item-img"]}
            src={el?.merchandise?.image?.url}
            alt="cart-item-image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className={styles["cart-item-info-wrapper"]}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "0",
            }}
          >
            {el?.merchandise?.product?.title}
          </p>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            Price: £{totalPrice}
          </p>
          <QuantitySelector
            handleQuantityChange={handleQuantityChange}
            quantity={el.quantity}
            size="small"
          />
        </div>
        <button
          className="button-control"
          onClick={() => handleRemoveCartLine({ lineIds: [el.id] })}
        >
          <img src="icons/trash.svg" />
        </button>
      </div>
    </li>
  );
};
