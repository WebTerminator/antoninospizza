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
import { useCart } from "@/cart.context";

export const Header = ({ toggleShoppingCart }: any) => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const router = useRouter();
  const { header, navigation, logoStyle } = styles;
  const isHomePath = router.pathname === "/";
  const { totalQuantity } = useCart();
  const isCartEmpty = totalQuantity === 0;

  const getNavItemStyle = (link: string) =>
    classNames(NavItemsStyle["nav-item"], {
      [NavItemsStyle["itemActive"]]: router.pathname === link,
    });

  const logo = <img className={logoStyle} src="Logo.svg" alt="Logo" />;

  return (
    <header className={header}>
      {isMobileNavVisible && <MobileNav toggleNav={setIsMobileNavVisible} />}

      <div className="logo-wrapper">
        {isHomePath ? logo : <Link href="/">{logo}</Link>}
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <ul className={navigation}>
          {navItems.map((item) => {
            if (item.label === "facebook" || item.label === "instagram") {
              return;
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
        <div
          style={{
            position: "relative",
            margin: "0 20px",
          }}
        >
          <button
            style={{
              appearance: "none",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={toggleShoppingCart}
          >
            <img
              style={{
                width: "28px",
              }}
              src="icons/shopping-cart.svg"
              alt="shopping cart"
            />
          </button>
          {!isCartEmpty && (
            <span
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                backgroundColor: "#ec615c",
                borderRadius: "50%",
                padding: "2px 6px",
                color: "white",
                fontSize: "12px",
              }}
            >
              {totalQuantity}
            </span>
          )}
        </div>
        <button
          className={MobileNavStyle["button-icon"]}
          onClick={() => setIsMobileNavVisible(true)}
        >
          <img src="icons/hamburger.svg" alt="hamburger icon" />
        </button>
      </div>
    </header>
  );
};
