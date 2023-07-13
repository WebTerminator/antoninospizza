/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_SHOPIFY_STORE_DOMAIN: process.env.NEXT_SHOPIFY_STORE_DOMAIN,
    NEXT_SHOPIFY_STOREFRONT_ACCESSTOKEN:
      process.env.NEXT_SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
};

module.exports = {
  ...nextConfig,
};
