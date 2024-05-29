import { gql } from "graphql-request";
import { CART_COMMON_FIELDS } from "./common";

export const cartLinesAdd = gql`
  ${CART_COMMON_FIELDS}
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cartProducts
      }
    }
  }
`;
