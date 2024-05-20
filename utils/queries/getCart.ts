import { gql } from "graphql-request";

export type GetCartResponse = {
  productByHandle: {
    id: string;
    title: string;
    description: string;
    featuredImage: {
      url: string;
    };
    ingredients: {
      value: string;
    };
    allergens: {
      value: string;
    };
    variants: {
      nodes: {
        price: {
          amount: string;
          currencyCode: string;
        };
        weight: number;
        id: string;
      }[];
    };
  };
};

export const getCart = gql`
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
