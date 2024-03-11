import { useCart } from "@/cart.context";
import { CartItem } from "./CartItem";
import styles from "@/styles/Cart.module.css";

export const CartItems = () => {
  const { items, checkoutUrl, totalPrice } = useCart();
  return (
    <ul className={styles["ul-wrapper"]}>
      {items?.map((el) => (
        <CartItem key={el.id} el={el} />
      ))}
      <div className={styles["footer"]}>
        <div>
          <p className={styles["total"]}>Total: </p>
          <p>£{totalPrice}</p>
        </div>

        <a
          target="_blank"
          href={checkoutUrl}
          className={`${styles["checkout"]} button`}
        >
          Checkout
        </a>
      </div>
    </ul>
  );
};
