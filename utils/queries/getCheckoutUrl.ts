import { gql } from "graphql-request";

export const getCheckoutUrlQuery = gql`
  query checkoutURL($cartId: ID!) {
    cart(id: $cartId) {
      checkoutUrl
    }
  }
`;
