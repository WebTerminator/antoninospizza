import { useState } from "react";
import { QuantitySelector } from "./QuantitySelector";
import { useCart } from "@/cart.context";

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

    // refactor if statement

   

  };

  return (
    <li
      style={{
        marginBottom: "20px",
        borderBottom: "1px solid #ccc",

        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            width: "80px",
            marginRight: "10px",
          }}
          src={el?.merchandise?.image?.url}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            {el?.merchandise.product.title}
          </p>
          <QuantitySelector
            handleQuantityChange={handleQuantityChange}
            defaultPosition="start"
            quantity={el.quantity}
          />
        </div>
      </div>
    </li>
  );
};
