/* eslint-disable @next/next/no-img-element */
import { NextSeo } from "next-seo";
import styles from "@/styles/Menu.module.css";
import { Menu as MenuUI } from "@/components/Menu";
import {
  BimbiMenu,
  ClassiciMenu,
  DessertMenu,
  PizzasMenu,
  PanuozzosMenu,
  StartersMenu,
} from "@/shared";

export default function Menu() {
  const menus = [
    {
      list: PizzasMenu,
      title: "Pizza",
      imgName: "pizza",
    },
    {
      list: PanuozzosMenu,
      title: "Panuozzo",
      imgName: "panuozzo",
    },
    {
      list: StartersMenu,
      title: "Starters",
      imgName: "starter",
    },
    {
      list: ClassiciMenu,
      title: "Classici",
      imgName: "tomatoes",
    },
    {
      list: BimbiMenu,
      title: "Bimbi",
    },
    {
      list: DessertMenu,
      title: "Dessert",
    },
  ];

  return (
    <>
      <NextSeo
        title="Menu - Antonino's Pizza"
        canonical="https://www.antoninospizza.co.uk/menu"
      />
      <div className={styles["header-container"]}>
        <h2 className="h2">
          Experience the authentic taste of Naples at Antonino’s
        </h2>
        <p>
          Our menu is crafted to showcase the best of Napolitan cuisine. From
          our classic Margherita to our creative gourmet pizzas, each dish is
          carefully prepared and cooked to perfection in our wood-fired oven.
          Here are some of our menu highlights:
        </p>
      </div>

      <div className={styles["main-container"]}>
        {menus.map((menu) => (
          <MenuUI
            key={menu.title}
            menuTitle={menu.title}
            menuItems={menu.list}
            img={
              menu.imgName
                ? {
                    src: `imgs/menu/${menu?.imgName}.png`,
                    alt: `${menu?.imgName} illustration`,
                  }
                : undefined
            }
          />
        ))}
      </div>
    </>
  );
}
