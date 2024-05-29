import { gql } from "graphql-request";
import { CART_COMMON_FIELDS } from "./common";

export const cartLinesUpdate = gql`
  ${CART_COMMON_FIELDS}
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cartProducts
      }
    }
  }
`;
