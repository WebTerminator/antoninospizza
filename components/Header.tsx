/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";

export const Header = () => {
  const router = useRouter();
  const { header, itemActive, logo, navigation } = styles;

  //   const hanldeActiveLink = () => {
  //     if (router.pathname === "/") {
  //       return "active";
  //     }
  //     return "";
  //   };

  console.log(router);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About us", link: "/about" },
    { label: "Menu", link: "/menu" },
    { label: "Contact us", link: "/contact" },
    {
      label: "facebook",
      link: "https://www.facebook.com/Antoninospizzaofficial",
    },
    { label: "instagram", link: "https://www.instagram.com/antonino_pizza/" },
  ];

  return (
    <header className={header}>
      <div>
        <img className={logo} src="Logo.svg" alt="Antonino's pizza logo" />
      </div>
      <ul className={navigation}>
        {navItems.map((item) => {
          if (item.label === "facebook" || item.label === "instagram") {
            return (
              <li key={item.label}>
                <img
                  width="32"
                  height="32"
                  src={`icons/${item.label}.svg`}
                  alt={`${item.label} account`}
                />
              </li>
            );
          }
          return (
            <li key={item.label}>
              <Link
                className={router.pathname === item.link ? itemActive : ""}
                href={item.link}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
