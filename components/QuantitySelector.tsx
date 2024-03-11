import styles from "../styles/QuantitySelector.module.css";

export const QuantitySelector = ({
  handleQuantityChange,
  quantity,
  size = "large",
}: {
  handleQuantityChange: (args: { action: "increment" | "decrement" }) => void;
  quantity: number;
  size?: "small" | "large";
}) => (
  <div
    className={styles["wrapper"]}
    style={{
      height: size === "small" ? "34px" : "40px",
      width: size === "small" ? "140px" : "100px",
    }}
  >
    <button
      style={{
        cursor: quantity === 1 ? "not-allowed" : "pointer",
      }}
      className={"button-control"}
      onClick={() => handleQuantityChange({ action: "decrement" })}
      disabled={quantity === 1}
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="white" />
        <path
          d="M6 12H18"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <input
      className={styles["input-control"]}
      type="text"
      value={quantity}
      disabled
    />
    <button
      className={"button-control"}
      onClick={() => handleQuantityChange({ action: "increment" })}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="white" />
        <path
          d="M12 6V18"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 12H18"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);
