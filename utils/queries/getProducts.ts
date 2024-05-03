import { gql } from "graphql-request";

export type GetProductsResponse = {
  products: {
    edges: {
      node: {
        variants: {
          edges: {
            node: {
              id: string;
              price: {
                amount: string;
                currencyCode: string;
              };
              sku: string;
              availableForSale: boolean;
            };
          }[];
        };
        id: string;
        title: string;
        handle: string;
        featuredImage: {
          altText: string;
          url: string;
        };
      };
    }[];
  };
};

export const getAllProductsQuery = gql`
  {
    products(first: 10) {
      edges {
        node {
          variants(first: 10) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
                sku
                availableForSale
              }
            }
          }
          id
          title
          handle
          featuredImage {
            altText
            url
          }
        }
      }
    }
  }
`;
