import { NextSeo } from "next-seo";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import { Carousel } from "../components/Carousel";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Us - Antonino's Pizza"
        canonical="https://www.antoninospizza.co.uk/about"
      />
      <div className="container-small">
        <h2 className="h2">About us</h2>

        <Carousel
          images={[
            {
              url: "/imgs/about/car-2.jpg",
              alt: "Antonino and Tiziana",
            },
            {
              url: "/imgs/about/car-3.jpg",
              alt: "Marghertia pizza",
            },
          ]}
        />

        <p className={styles["p"]}>
          Antonino’s pizza adventure started in 2018 when Antonino’s father,
          Antonio decided to do a complete make over of a 1988 Ape Car Piaggio,
          that belonged to Zi’ Pepp (uncle Peppe), he built on it a powerful
          pizza oven and shipped it over to London.
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
          The founders of Antonino’s Pizza, Antonino and Tiziana met in London
          where they started their love-pizza story and made the vintage Ape Car
          a great addition to any event; the pizza that they serve matches how
          good the Ape Car looks.
        </p>

        <p className={styles["p"]}>
          Antonino and Tiziana opened the door of their first Pizzeria in
          Sutton, after years of perfecting their sourdough experience and
          sourcing the best ingredients.
        </p>

        <p className={styles["p"]}>
          Inspired by the vibrant culinary traditions of Naples, they take great
          pride in using only the finest and freshest ingredients in all of
          their dishes.
        </p>

        <p className={styles["p"]}>
          Their story began with love for Neapolitan cuisine and a desire to
          share it with the world, from a beautiful van or at their cozy
          Pizzeria, they strive to create a warm and inviting atmosphere for the
          guests, with friendly and knowledgeable staff who are dedicated to
          making your visit a memorable one.
        </p>

        <p className={styles["p"]}>
          The menu features a variety of traditional and gourmet pizzas, made
          with San Marzano tomatoes, fresh fior di latte mozzarella, and
          hand-stretched dough, cooked to perfection. also offers a selection of
          salads, antipasti, and desserts.
        </p>
      </div>
    </>
  );
}
