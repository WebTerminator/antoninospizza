import { gql, GraphQLClient } from "graphql-request";
import {
  GetProductResponse,
  getSingleProductDetails,
  getAllProductsQuery,
  GetProductsResponse,
} from "./queries";

const storefrontAccessToken = process.env.NEXT_SHOPIFY_STOREFRONT_ACCESSTOKEN;
const endpoint = process.env.NEXT_SHOPIFY_STORE_DOMAIN;
const graphQLClient = new GraphQLClient(endpoint as string, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  } as any,
});

export const CART_COMMON_FIELDS = gql`
  fragment cartProducts on Cart {
    id
    totalQuantity
    estimatedCost {
      totalAmount {
        amount
      }
    }
    lines(first: 10) {
      nodes {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            price {
              amount
              currencyCode
            }
            product {
              title
            }
            title
            image {
              url
            }
          }
        }
      }
    }
  }
`;

export async function getProducts() {
  try {
    const data: GetProductsResponse = await graphQLClient.request(
      getAllProductsQuery
    );

    return data;
  } catch (error) {
    throw new Error(error as any);
  }
}

export async function getProduct({ handle }: { handle: string }) {
  const variables = {
    handle,
  };

  try {
    const data: GetProductResponse = await graphQLClient.request(
      getSingleProductDetails,
      variables
    );

    return data;
  } catch (error) {
    throw new Error(error as any);
  }
}

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

// updates existing cart
export async function updateCartLines({
  cartId,
  itemId,
  quantity,
}: {
  cartId: string;
  itemId: string;
  quantity: string;
}) {
  const updateCartMutation = gql`
    ${CART_COMMON_FIELDS}
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...cartProducts
        }
      }
    }
  `;

  const variables = {
    cartId,
    lines: [
      {
        quantity: parseInt(quantity),
        merchandiseId: itemId,
      },
    ],
  };

  try {
    return await graphQLClient.request(updateCartMutation, variables);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function updateCartLines2({
  cartId,
  quantity,
  mainId,
}: {
  cartId: string;
  quantity: string;
  mainId: string;
}) {
  const updateCartMutation = gql`
    ${CART_COMMON_FIELDS}
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          ...cartProducts
        }
      }
    }
  `;

  const variables = {
    cartId,
    lines: [
      {
        quantity: parseInt(quantity),
        id: mainId,
      },
    ],
  };

  try {
    return await graphQLClient.request(updateCartMutation, variables);
  } catch (error: any) {
    throw new Error(error);
  }
}

// retrieves cart
export async function retrieveCart(cartId: string) {
  const cartQuery = gql`
    query cartQuery($cartId: ID!) {
      cart(id: $cartId) {
        id
        createdAt
        updatedAt
        totalQuantity
        lines(first: 10) {
          nodes {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                product {
                  title
                }
                price {
                  amount
                  currencyCode
                }
                image {
                  url
                }
              }
            }
          }
        }
        estimatedCost {
          totalAmount {
            amount
          }
        }
      }
    }
  `;

  const variables = {
    cartId,
  };
  try {
    const data: any = await graphQLClient.request(cartQuery, variables);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}

//get checkout url
export const getCheckoutUrl = async (cartId: string) => {
  const getCheckoutUrlQuery = gql`
    query checkoutURL($cartId: ID!) {
      cart(id: $cartId) {
        checkoutUrl
      }
    }
  `;
  const variables = {
    cartId,
  };
  try {
    return await graphQLClient.request(getCheckoutUrlQuery, variables);
  } catch (error: any) {
    throw new Error(error);
  }
};

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
