/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { left, section } = styles as any;

  return (
    <div>
      <section className={section}>
        <div>
          <div className={styles["large-text-wrapper"]}>
            <h2>Handcrafted pizzas made with Love</h2>
            <p>Authentic Napoletan pizza with our handmade pizza dough</p>
          </div>
        </div>

        <div>
          <img src="illustrations/home-pizza.png" alt="Pizza illustration" />
        </div>
      </section>

      <section className={section}>
        <div className={styles["small-img-left"]}>
          <img
            src="illustrations/Home-ingredients.png"
            alt="Pizza illustration"
          />
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
          <img src="illustrations/Home-flour.png" alt="Pizza illustration" />
        </div>
      </section>

      <section className={section}>
        <div className={styles["small-img-left"]}>
          <img src="illustrations/Home-ape.png" alt="Pizza illustration" />
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
    </div>
  );
}
