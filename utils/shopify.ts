import { gql, GraphQLClient } from "graphql-request";
import {
  GetProductResponse,
  getSingleProductDetails,
  getAllProductsQuery,
  GetProductsResponse,
  getCart,
  GetCartResponse,
  CART_COMMON_FIELDS,
  cartLinesAdd,
  cartLinesUpdate,
  getCheckoutUrlQuery,
} from "./queries";

const storefrontAccessToken = process.env.NEXT_SHOPIFY_STOREFRONT_ACCESSTOKEN;
const endpoint = process.env.NEXT_SHOPIFY_STORE_DOMAIN;
const graphQLClient = new GraphQLClient(endpoint as string, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  } as any,
});

const getData = async (query: string, variables?: Record<string, any>) => {
  try {
    const data = await graphQLClient.request(query, variables);
    return data;
  } catch (error) {
    throw new Error(error as any);
  }
};

export const getProducts = () =>
  getData(getAllProductsQuery) as Promise<GetProductsResponse>;

export const getProduct = ({ handle }: { handle: string }) =>
  getData(getSingleProductDetails, { handle }) as Promise<GetProductResponse>;

export const retrieveCart = async (cartId: string) =>
  getData(getCart, { cartId }) as Promise<GetCartResponse>;

// create a cart for the first time and adds items to it
export async function createAndAddToCart({
  itemId,
  quantity,
}: {
  itemId: string;
  quantity: string;
}) {
  const createCartMutation = gql`
    ${CART_COMMON_FIELDS}
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
        cart {
          ...cartProducts
        }
      }
    }
  `;
  const variables = {
    cartInput: {
      lines: [
        {
          quantity: parseInt(quantity),
          merchandiseId: itemId,
        },
      ],
      attributes: { key: "cart_attribute", value: "This is a cart attribute" },
    },
  };
  try {
    const data = await graphQLClient.request(createCartMutation, variables);

    return data;
  } catch (error: any) {
    debugger;
    throw new Error(error);
  }
}

export async function removeCartLine({
  cartId,
  lineIds,
}: {
  cartId: string;
  lineIds: string[];
}) {
  const removeCartLine = gql`
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          totalQuantity
          estimatedCost {
            totalAmount {
              amount
            }
          }
          totalQuantity
          lines(first: 10) {
            nodes {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  image {
                    url
                  }
                  product {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const variables = {
    cartId,
    lineIds,
  };
  try {
    return await graphQLClient.request(removeCartLine, variables);
  } catch (error: any) {
    throw new Error(error);
  }
}

export const updateCartLines = ({
  cartId,
  itemId,
  quantity,
}: {
  cartId: string;
  itemId: string;
  quantity: string;
}) =>
  getData(cartLinesAdd, {
    cartId,
    lines: [
      {
        quantity: parseInt(quantity),
        merchandiseId: itemId,
      },
    ],
  });

export const updateCartLines2 = ({
  cartId,
  quantity,
  mainId,
}: {
  cartId: string;
  quantity: string;
  mainId: string;
}) =>
  getData(cartLinesUpdate, {
    cartId,
    lines: [
      {
        quantity: parseInt(quantity),
        id: mainId,
      },
    ],
  });

//get checkout url
export const getCheckoutUrl = async (cartId: string) =>
  getData(getCheckoutUrlQuery, { cartId });

export const handleAddToCart = async ({
  quantity,
  productId,
}: {
  quantity: string;
  productId: string;
}) => {
  let cartId: any = sessionStorage.getItem("cartId");

  if (parseInt(quantity) > 0) {
    if (cartId) {
      await updateCartLines({
        cartId,
        itemId: productId,
        quantity: quantity + 1,
      });
    } else {
      let data: any = await createAndAddToCart({ itemId: productId, quantity });
      cartId = data.cartCreate.cart.id;
      sessionStorage.setItem("cartId", cartId);
    }
  }
};
