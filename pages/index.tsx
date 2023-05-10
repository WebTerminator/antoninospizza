/* eslint-disable @next/next/no-img-element */
import { NextSeo } from "next-seo";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const { section } = styles as any;

  return (
    <>
      <NextSeo
        title="Home - Antonino's Pizza"
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
      <div>
        <section className={section}>
          <div>
            <div className={styles["large-text-wrapper"]}>
              <h2>Handcrafted pizzas made with Love</h2>
              <p>Authentic Napoletan pizza with our handmade pizza dough</p>
            </div>
          </div>

          <div>
            <img src="imgs/Home-pizza.png" alt="Pizza illustration" />
          </div>
        </section>

        <section className={styles["section-reverse"]}>
          <div className={styles["small-img-left"]}>
            <img src="imgs/Home-ingredients.png" alt="Pizza illustration" />
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
            <img src="imgs/Home-flour.png" alt="Pizza illustration" />
          </div>
        </section>

        <section className={styles["section-reverse"]}>
          <div className={styles["small-img-left"]}>
            <img src="imgs/Home-ape.png" alt="Pizza illustration" />
          </div>

          <div>
            <div className={styles["small-text-right"]}>
              <h3>Bring the pizzeria to you with our ape car event</h3>
              <p>
                Experience fresh, hot pizza anywhere with our mobile pizzeria!
              </p>

              <ul>
                <li>
                  <p>Authentic Italian wood-fired pizza made fresh on-site</p>
                </li>
                <li>
                  <p>
                    Our signature pizza dough, fresh toppings, and homemade
                    sauce
                  </p>
                </li>
                <li>
                  <p>A fun, unique and memorable experience for any occasion</p>
                </li>
                <li>
                  <p>
                    Perfect for parties, corporate events, weddings, and more
                  </p>
                </li>
              </ul>
              <a className="button" href="mailto:a.santorufo@icloud.com">
                Book your event today!
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
