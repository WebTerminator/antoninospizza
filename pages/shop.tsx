/* eslint-disable @next/next/no-img-element */
import { NextSeo } from "next-seo";
import styles from "@/styles/Shop.module.css";
import { getMetaobjects, getProducts } from "../utils/shopify";
import { handleAddToCart } from "../utils/shopify";

function Shop(props: any) {
  return (
    <div className="flex">
      {props.products.edges.map((product: any) => {
        return (
          <div className={styles["product-wrapper"]} key={product.node.id}>
            <div className={styles.container}>
              <h1>{product.node.title}</h1>
              <img src={product.node.featuredImage?.url} alt="pizza" />
              <p>{product.node.description}</p>
              <button
                onClick={() =>
                  handleAddToCart("1", product.node.variants.edges[0].node.id)
                }
              >
                add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  let data = await getProducts();
  return {
    props: data,
  };
}

export default Shop;
