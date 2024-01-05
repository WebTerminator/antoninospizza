/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Shop.module.css";
import { getProducts } from "../utils/shopify";
import { ProductCard } from "@/components/ProductCard";

function Shop(props: any) {
  return (
    <div
      style={{
        paddingBottom: "40px",
      }}
    >
      <h2 className="h2">You can purchase our delicious products</h2>
      <p style={{ textAlign: "center" }}>
        We meticulously handcraft our products, paying close attention to every
        detail.
      </p>
      <div className={styles["shop"]}>
        {props.products.edges.map(
          ({ node: { title, featuredImage, id, variants, handle } }: any) => (
            <ProductCard
              key={id}
              featuredImage={featuredImage}
              handle={handle}
              id={id}
              title={title}
              variants={variants}
            />
          )
        )}
      </div>
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
