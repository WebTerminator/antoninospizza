import { useCart } from "@/cart.context";
import { CartItems } from "./CartItems";
import styles from "@/styles/Cart.module.css";

export const Cart = ({
  isShoppingCartVisible,
  handleToggleCart,
}: {
  isShoppingCartVisible: boolean;
  handleToggleCart: () => void;
}) => {
  const { items } = useCart();

  const cartItemsTotal =
    items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
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
        {cartItemsTotal > 0 ? (
          <p
            style={{
              fontSize: "24px",
              fontWeight: "semi-bold",
              marginBottom: "0",
            }}
          >
            Cart ({cartItemsTotal})
          </p>
        ) : null}
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
  );
};
