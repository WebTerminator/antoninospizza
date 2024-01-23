import { useCart } from "@/cart.context";
import { CartItem } from "./CartItem";

export const CartItems = () => {
  const { items, checkoutUrl, totalPrice } = useCart();
  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0",
        margin: "0",
      }}
    >
      {items?.map((el) => (
        <CartItem key={el.id} el={el} />
      ))}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          left: "0",
          padding: "1rem",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
            borderBottom: "1px solid #000",
            marginBottom: "1rem",
          }}
        >
          Total: £{totalPrice}
        </p>
        <a
          className="button"
          target="_blank"
          href={checkoutUrl}
          style={{
            textAlign: "center",
            width: "100%",
            display: "block",
          }}
        >
          Checkout
        </a>
      </div>
    </ul>
  );
};
