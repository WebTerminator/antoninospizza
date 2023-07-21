import { gql, GraphQLClient } from "graphql-request";
// console.log(endpoint);
const storefrontAccessToken = process.env.NEXT_SHOPIFY_STOREFRONT_ACCESSTOKEN;
const endpoint = process.env.NEXT_SHOPIFY_STORE_DOMAIN;
const graphQLClient = new GraphQLClient(endpoint as string, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  } as any,
});

export async function getProducts() {
  const getAllProductsQuery = gql`
    {
      products(first: 10) {
        edges {
          node {
            variants(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
            id
            title
            description
            featuredImage {
              altText
              url
            }
          }
        }
      }
    }
  `;
  try {
    const data = await graphQLClient.request(getAllProductsQuery);

    return data;
  } catch (error) {
    throw new Error(error as any);
  }
}

// create a cart for the first time and adds items to it
export async function addToCart(itemId: string, quantity: string) {
  const createCartMutation = gql`
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
        cart {
          id
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

// updates existing cart
export async function updateCart(
  cartId: string,
  itemId: string,
  quantity: string
) {
  const updateCartMutation = gql`
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
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

// retrieves cart
export async function retrieveCart(cartId: string) {
  const cartQuery = gql`
    query cartQuery($cartId: ID!) {
      cart(id: $cartId) {
        id
        createdAt
        updatedAt

        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                id
                ... on ProductVariant {
                  id
                  title
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
    return data.cart;
  } catch (error: any) {
    throw new Error(error);
  }
}

export const getMetaobjects = async () => {
  const getMetaobjectsQuery = gql`
    query MyQuery {
      metaobjects(type: "menu_list", first: 10) {
        nodes {
          field(key: "menu_list") {
            value
          }
        }
      }
    }
  `;
  try {
    return await graphQLClient.request(getMetaobjectsQuery);
  } catch (error: any) {
    throw new Error(error);
  }
};

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
    cartId: cartId,
  };
  try {
    return await graphQLClient.request(getCheckoutUrlQuery, variables);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const handleAddToCart = async (quantity: string, productId: any) => {
  let cartId: any = sessionStorage.getItem("cartId");
  debugger;
  if (parseInt(quantity) > 0) {
    if (cartId) {
      await updateCart(cartId, productId, quantity);
    } else {
      debugger;
      let data: any = await addToCart(productId, quantity);
      cartId = data.cartCreate.cart.id;
      sessionStorage.setItem("cartId", cartId);
    }
  }
};
