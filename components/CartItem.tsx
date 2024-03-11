import { QuantitySelector } from "./QuantitySelector";
import { useCart } from "@/cart.context";
import styles from "@/styles/Cart.module.css";

export const CartItem = ({ el }: any) => {
  const { handleUpdateExistingCartLines, handleRemoveCartLine } = useCart();

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

  const totalItemPrice = el?.merchandise?.price?.amount * el.quantity;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <img className={styles["item-img"]} src={el?.merchandise?.image?.url} />
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
            £{totalItemPrice}
          </p>
          <QuantitySelector
            handleQuantityChange={handleQuantityChange}
            quantity={el.quantity}
            size="small"
          />
        </div>
        <button className="button-control">
          <img src="icons/trash.svg" />
        </button>
      </div>
    </li>
  );
};
