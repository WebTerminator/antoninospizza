import { gql } from "graphql-request";

export type NodeType = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    product: {
      title: string;
    };
    price: {
      amount: number;
      currencyCode: string;
    };
    image: {
      url: string;
    };
  };
};

export type GetCartResponse = {
  cart: {
    id: string;
    createdAt: string;
    updatedAt: string;
    totalQuantity: number;
    lines: {
      nodes: NodeType[];
    };
    estimatedCost: {
      totalAmount: {
        amount: number;
      };
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
