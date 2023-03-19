/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";
import { socilaLinks } from "@/shared/";

export const Header = () => {
  const router = useRouter();
  const { header, itemActive, logo, navigation, social } = styles;

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About us", link: "/about" },
    { label: "Menu", link: "/menu" },
    { label: "Contact us", link: "/contact" },
    ...socilaLinks,
  ];

  return (
    <header className={header}>
      <div>
        <img src="Logo.svg" alt="Antonino's pizza logo" />
      </div>
      <ul className={navigation}>
        {navItems.map((item) => {
          if (item.label === "facebook" || item.label === "instagram") {
            return (
              <li className="social" key={item.label}>
                <Link target="_blank" href={item.link}>
                  <img
                    width="32"
                    height="32"
                    src={`icons/${item.label}.svg`}
                    alt={`${item.label} account`}
                  />
                </Link>
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
