import { gql, GraphQLClient } from "graphql-request";
// console.log(endpoint);
const storefrontAccessToken = process.env.NEXT_SHOPIFY_STOREFRONT_ACCESSTOKEN;
const endpoint = process.env.NEXT_SHOPIFY_STORE_DOMAIN;
const graphQLClient = new GraphQLClient(endpoint as string, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  } as any,
});

const getAllProductsQuery = gql`
  {
    products(first: 10) {
      edges {
        node {
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

export async function getProducts() {
  console.log("before try");
  try {
    const data = await graphQLClient.request(getAllProductsQuery);
    console.log("jhere");
    return data;
  } catch (error) {
    throw new Error(error as any);
  }
}
