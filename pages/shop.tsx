/* eslint-disable @next/next/no-img-element */
import { NextSeo } from "next-seo";
import styles from "@/styles/Home.module.css";
import { getProducts } from "../utils/shopify";

function Shop(props: any) {
  console.log(props);
  console.log(props);
  return (
    <div className="flex">
      {props.products.edges.map((product: any) => {
        return (
          <div key={product.node.id}>
            <div className={styles.container}>
              <h1>{product.node.title}</h1>
              <img src={product.node.featuredImage.url} alt="pizza" />
              <p>{product.node.description}</p>
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
