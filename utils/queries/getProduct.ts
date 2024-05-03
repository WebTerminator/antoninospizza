import { gql, GraphQLClient } from "graphql-request";

export type GetProductResponse = {
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

export const getSingleProductDetails = gql`
  query getProductIdFromHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      featuredImage {
        url
      }
      ingredients: metafield(namespace: "custom", key: "ingredients") {
        value
      }
      allergens: metafield(namespace: "custom", key: "allergens") {
        value
      }
      variants(first: 1) {
        nodes {
          price {
            amount
            currencyCode
          }
          weight
          id
        }
      }
    }
  }
`;
