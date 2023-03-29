/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Menu.module.css";
import { Menu as MenuUI } from "@/components/Menu";
import { PizzasMenu, PanuozzosMenu, StartersMenu } from "@/shared";

export default function Menu() {
  return (
    <>
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
        <MenuUI
          menuTitle="Pizza"
          menuItems={PizzasMenu}
          img={{
            src: "illustrations/menu/pizza.png",
            alt: "pizza illustration",
          }}
        />
      </div>

      <div className={styles["main-container"]}>
        <MenuUI
          menuTitle="Panuozzo"
          menuItems={PanuozzosMenu}
          img={{
            src: "illustrations/menu/panuozzo.png",
            alt: "panuozzo illustration",
          }}
        />
      </div>

      <div className={styles["main-container"]}>
        <MenuUI
          menuTitle="Starters"
          menuItems={StartersMenu}
          img={{
            src: "illustrations/menu/starter.png",
            alt: "starters illustration",
          }}
        />
      </div>
    </>
  );
}
