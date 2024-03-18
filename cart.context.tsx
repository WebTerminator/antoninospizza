import { createContext, useContext, useEffect, useState } from "react";
import {
  updateCartLines,
  retrieveCart,
  createAndAddToCart,
  getCheckoutUrl,
  updateCartLines2,
  removeCartLine,
} from "./utils/shopify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ItemType = {
  name: string;
};

interface CartContextProps {
  items: any[];
  checkoutUrl: string;
  totalQuantity: number;
  totalPrice?: number;
  handleAddToCart: ({
    quantity,
    productId,
  }: {
    quantity: string;
    productId: string;
  }) => Promise<void>;
  handleRemoveCartLine: ({ lineIds }: { lineIds: string[] }) => Promise<void>;
  handleUpdateExistingCartLines: ({
    quantity,
    mainId,
  }: {
    quantity: string;
    mainId: string;
  }) => Promise<void>;
}

const defaultState: CartContextProps = {
  items: [],
  totalQuantity: 0,
  checkoutUrl: "",
  totalPrice: 0,
  handleAddToCart: ({
    quantity,
    productId,
  }: {
    quantity: string;
    productId: string;
  }) => Promise.resolve(),
  handleRemoveCartLine: ({ lineIds }: { lineIds: string[] }) =>
    Promise.resolve(),
  handleUpdateExistingCartLines: ({
    mainId,
    quantity,
  }: {
    mainId: string;
    quantity: string;
  }) => Promise.resolve(),
};

const CartContext = createContext(defaultState);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: any) => {
  const [items, setCartItems] = useState<ItemType[]>([]);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [checkoutUrl, setCheckoutUrl] = useState("");
 
  useEffect(() => {
    // get latest cart by id
    const cartId = sessionStorage.getItem("cartId");

    const loadCart = async () => {
      if (cartId) {
        const { cart } = await retrieveCart(cartId);
        setTotalQuantity(cart?.totalQuantity);
        setTotalPrice(cart?.estimatedCost.totalAmount.amount);
        const items = cart?.lines.nodes;
        setCartItems(items);
      }
    };

    loadCart();
  }, []);

  useEffect(() => {
    const cartId = sessionStorage.getItem("cartId");

    const setUrl = async () => {
      if (cartId) {
        const { cart } = (await getCheckoutUrl(cartId)) as any;

        setCheckoutUrl(cart?.checkoutUrl);
      }
    };

    setUrl();
  }, []);

  const handleAddToCart = async ({
    quantity,
    productId,
  }: {
    quantity: string;
    productId: string;
  }) => {
    let cartId: any = sessionStorage.getItem("cartId");

    if (cartId) {
      const updatedCart: any = await updateCartLines({
        cartId,
        itemId: productId,
        quantity,
      });

      setTotalQuantity(updatedCart.cartLinesAdd.cart.totalQuantity);
      setCartItems(updatedCart.cartLinesAdd.cart.lines.nodes);
      setTotalPrice(
        updatedCart.cartLinesAdd.cart.estimatedCost.totalAmount.amount
      );
    } else {
      let data: any = await createAndAddToCart({ itemId: productId, quantity });

      setTotalQuantity(data.cartCreate.cart.totalQuantity);
      setCartItems(data.cartCreate.cart.lines.nodes);
      setTotalPrice(data.cartCreate.cart.estimatedCost.totalAmount.amount);
      cartId = data.cartCreate.cart.id;
      sessionStorage.setItem("cartId", cartId);
    }
    toast.success("A product has been added!");

    const { cart } = (await getCheckoutUrl(cartId)) as any;

    setCheckoutUrl(cart?.checkoutUrl);
  };

  const handleUpdateExistingCartLines = async ({
    quantity,
    mainId,
  }: {
    quantity: string;
    mainId: string;
  }) => {
    const cartId: any = sessionStorage.getItem("cartId");

    const updatedCart: any = await updateCartLines2({
      cartId,
      quantity,
      mainId,
    });

    setTotalPrice(
      updatedCart.cartLinesUpdate.cart.estimatedCost.totalAmount.amount
    );

    setTotalQuantity(updatedCart.cartLinesUpdate.cart.totalQuantity);
    setCartItems(updatedCart.cartLinesUpdate.cart.lines.nodes);
  };

  const handleRemoveCartLine = async ({ lineIds }: { lineIds: string[] }) => {
    const cartId: any = sessionStorage.getItem("cartId");

    const updatedCart: any = await removeCartLine({
      cartId,
      lineIds,
    });

    setTotalQuantity(updatedCart.cartLinesRemove.cart.totalQuantity);
    setCartItems(updatedCart.cartLinesRemove.cart.lines.nodes);
    setTotalPrice(
      updatedCart.cartLinesRemove.cart.estimatedCost.totalAmount.amount
    );
  };

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        checkoutUrl,
        handleRemoveCartLine,
        totalPrice,
        items,
        totalQuantity,
        handleUpdateExistingCartLines,
      }}
    >
      <>
        {children}
        <ToastContainer position="top-center" />
      </>
    </CartContext.Provider>
  );
};
