import styles from "@/styles/Shop.module.css";
import { getProducts } from "../utils/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Instructions } from "@/components/Instructions";
import { Widget } from "@/components/Widget";

function Shop(props: any) {
  return (
    <div
      className={styles["shop-wrapper"]}
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

      <Instructions />

      <Widget source="google" />
    </div>
  );
}

export async function getServerSideProps() {
  const props = await getProducts();
  return {
    props,
  };
}

export default Shop;
