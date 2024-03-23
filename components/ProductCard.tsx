import styles from "@/styles/Shop.module.css";
import Link from "next/link";
import Image from "next/image";

export const ProductCard = ({
  featuredImage,
  id,
  title,
  variants,
  handle,
}: any) => {
  return (
    <div className={styles["product-wrapper"]} key={id}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginBottom: "20px",
        }}
      >
        <Image
          src={featuredImage?.url}
          alt="pizza"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <p
        style={{
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: 600,
          marginBottom: "0",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "18px",
          lineHeight: "28px",
          marginBottom: "20px",
        }}
      >
        £{variants.edges[0].node.price.amount}{" "}
        {variants.edges[0].node.price.currencyCode}
      </p>
      <Link
        href={`/${handle}`}
        style={{ width: "100%", display: "flex", textDecoration: "none" }}
      >
        <button
          className="button"
          style={{
            marginBottom: "0",
          }}
        >
          Buy now
        </button>
      </Link>
    </div>
  );
};
