import { useState } from "react";

export const QuantitySelector = ({
  handleQuantityChange,
  quantity,
  setQuantity,
  defaultPosition = "center",
}: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: defaultPosition === "center" ? "center" : "start",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: "24px",
          height: "24px",
          cursor: quantity === 0 ? "not-allowed" : "pointer",
        }}
        onClick={() => handleQuantityChange({ action: "decrement" })}
        disabled={quantity === 0}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        style={{
          width: "26px",
          textAlign: "center",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        type="text"
        value={quantity}
        onChange={setQuantity}
      />
      <button
        style={{
          width: "24px",
          height: "24px",
          cursor: "pointer",
        }}
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
};
