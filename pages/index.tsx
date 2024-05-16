import { NextSeo } from "next-seo";
import styles from "@/styles/Home.module.css";
import { getProducts } from "../utils/shopify";
import { Widget } from "@/components/Widget";
import { MapWithInfo } from "@/components/MapWithInfo";
import { Img } from "@/components/Img";

export default function Home() {
  const { section } = styles as any;

  return (
    <>
      <NextSeo
        title="Antonino's Pizza"
        description="A Sutton based Napoletan pizza with other authentic Italian classic food."
        canonical="https://www.antoninospizza.co.uk/"
        openGraph={{
          type: "website",
          url: "https://www.antoninospizza.co.uk/",
          title: "Antonino's Pizza",
          description:
            "A Sutton based Napoletan pizza with other authentic Italian classic food.",
          images: [
            {
              url: "https://www.antoninospizza.co.uk/imgs/contact/us.png",
              alt: "Antonino's Pizza",
            },
          ],
        }}
      />
      <div className={styles["home-inner"]}>
        <section className={section}>
          <div>
            <div className={styles["large-text-wrapper"]}>
              <h2 style={{ textAlign: "left" }}>
                Handcrafted pizzas made with Love
              </h2>
              <p>Authentic Napoletan pizza with our handmade pizza dough</p>
            </div>
          </div>

          <div>
            <Img url="/imgs/Home-pizza.png" alt="Pizza illustration" />
          </div>
        </section>

        <section className={styles["section-reverse"]}>
          <div className={styles["small-img-left"]}>
            <Img url="/imgs/Home-ingredients.png" alt="Pizza illustration" />
          </div>

          <div>
            <div className={styles["small-text-right"]}>
              <h3>Organic goodness on every slice</h3>
              <p>
                Experience the delicious taste of organic ingredients in every
                bite. We take pride in using only the freshest, highest quality
                organic ingredients in our pizza.
              </p>
            </div>
          </div>
        </section>

        <section className={section}>
          <div>
            <div className={styles["small-text-left"]}>
              <h3>Handmade pizza dough</h3>
              <p>
                Crafting the perfect pizza, one handmade dough at a time. Our
                handmade pizza dough is made from scratch every day, using only
                the freshest flour, yeast, and water.
              </p>
            </div>
          </div>

          <div className={styles["small-img-right"]}>
            <Img url="/imgs/Home-flour.png" alt="Pizza illustration" />
          </div>
        </section>

        <MapWithInfo />

        <div style={{ marginBottom: "60px" }}>
          <Widget source="instagram" />
        </div>
      </div>
    </>
  );
}

Home.getInitialProps = async function () {
  let data = await getProducts();

  return {
    props: data,
  };
};
