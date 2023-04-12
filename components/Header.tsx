/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import styles from "@/styles/Header.module.css";
import NavItemsStyle from "@/styles/NavItems.module.css";
import { navItems } from "@/shared/";
import { MobileNav } from "@/components/MobileNav";
import MobileNavStyle from "@/styles/MobileNav.module.css";

export const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const router = useRouter();
  const { header, navigation } = styles;
  const isHomePath = router.pathname === "/";

  const getNavItemStyle = (link: string) =>
    classNames(NavItemsStyle["nav-item"], {
      [NavItemsStyle["itemActive"]]: router.pathname === link,
    });

  const logo = <img src="Logo.svg" alt="Antonino's pizza logo" />;

  return (
    <header className={header}>
      {isMobileNavVisible && <MobileNav toggleNav={setIsMobileNavVisible} />}

      <div className="logo-wrapper">
        {isHomePath ? logo : <Link href="/">{logo}</Link>}
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
              <Link className={getNavItemStyle(item.link)} href={item.link}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        className={MobileNavStyle["button-icon"]}
        onClick={() => setIsMobileNavVisible(true)}
      >
        <img src="icons/hamburger.svg" alt="hamburger icon" />
      </button>
    </header>
  );
};
