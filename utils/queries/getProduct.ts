import { gql } from "graphql-request";

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
    technical_sheet: {
      reference: {
        url: string;
      };
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
      technical_sheet: metafield(namespace: "custom", key: "technical_sheet") {
        reference {
          ... on GenericFile {
            url
          }
        }
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
