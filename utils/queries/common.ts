import { gql } from "graphql-request";

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
