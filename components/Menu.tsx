/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Menu.module.css";

interface MenuItem {
  title: string;
  subTitle?: string;
  price: string;
  description: string;
  subList?: string[];
}

interface MenuProps {
  menuItems: MenuItem[];
  menuTitle: string;
  img?: {
    src: string;
    alt: string;
  };
}

export const Menu = ({ menuItems, menuTitle, img }: MenuProps) => (
  <>
    {img?.src && img?.alt && <img src={img?.src} alt={img?.alt} />}
    <h3>{menuTitle}</h3>
    <div className={styles["menu"]}>
      <div className={styles["menu-header"]}>
        <p>Name</p>
        <p>Price</p>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.title} className={styles["menu-item-wrapper"]}>
            <div className={styles["menu-item-header"]}>
              {
                <p>
                  <span className={styles["menu-item-title"]}>
                    {item.title}
                  </span>
                  {item.subTitle && (
                    <span className={styles["menu-item-subtitle"]}>
                      ({item.subTitle})
                    </span>
                  )}
                </p>
              }
              <p className={styles["menu-item-price"]}>£{item.price}</p>
            </div>
            <p>{item.description}</p>
            {item?.subList && item?.subList.length > 0 && (
              <ul className={styles["menu-item-sublist"]}>
                {item.subList.map((subItem) => (
                  <li key={subItem}>
                    <p>{subItem}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  </>
);
