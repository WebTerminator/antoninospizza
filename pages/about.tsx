import { NextSeo } from "next-seo";
import styles from "@/styles/About.module.css";
import { MultiImg } from "@/components/MultiImg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Us - Antonino's Pizza"
        canonical="https://www.antoninospizza.co.uk/about"
      />
      <div className="container-small">
        <h2 className="h2">About page</h2>

        <section className={styles["section"]}>
          <MultiImg
            topLeftImg={{
              src: "about/header-tl",
              alt: "tomato illustration",
            }}
            mainImg={{
              src: "about/header",
              alt: "ape car display",
            }}
            bottomRightImg={{
              src: "about/header-br",
              alt: "olives illustration",
            }}
            text={[
              "Antonino’s Pizza bring you the authentic taste of Neapolitan sourdough pizza served from their beautiful 1988 vintage Piaggio. Their lovely van would be an amazing addition to almost any event and the pizza that they serve from it matches how good it looks.",
            ]}
          />
        </section>

        <div className={styles["img-wrapper"]}>
          <Image
            src="/imgs/about/oven.png"
            alt="oven illustration"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <p className={styles["p"]}>
          At Antonino’s, we are passionate about bringing the authentic taste of
          Naples to Sutton, UK. Our restaurant is inspired by the vibrant
          culinary traditions of Naples, Italy, and we take great pride in using
          only the finest and freshest ingredients in all of our dishes.
        </p>
        <p className={styles["p"]}>
          Our story began with a love for Napolitan cuisine and a desire to
          share it with the world. After years of perfecting our pizza-making
          techniques and sourcing the best ingredients, we opened our doors in
          Sutton, with the goal of creating an unforgettable dining experience
          for our customers.
        </p>

        <div className={styles["img-wrapper"]}>
          <Image
            src="/imgs/about/flour.png"
            alt="flour illustration"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <p className={styles["p"]}>
          Our menu features a variety of traditional and gourmet pizzas, all
          made with San Marzano tomatoes, fresh mozzarella, and hand-stretched
          dough that is cooked to perfection in our wood-fired oven. We also
          offer a selection of salads, antipasti, and desserts.
        </p>

        <p className={styles["p"]}>
          But our commitment to quality goes beyond our ingredients. We believe
          that a great dining experience is about more than just the food;
          it&apos;s about the atmosphere, the service, and the overall
          experience. That&apos;s why we strive to create a warm and inviting
          atmosphere for our guests, with friendly and knowledgeable staff who
          are dedicated to making your visit a memorable one.
        </p>
      </div>
    </>
  );
}
