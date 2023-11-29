/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import { navItems } from "@/shared/";
import NavItemsStyle from "@/styles/NavItems.module.css";
import MobileNavStyle from "@/styles/MobileNav.module.css";

export const MobileNav = ({
  toggleNav,
}: {
  toggleNav: (value: boolean) => void;
}) => {
  const router = useRouter();

  const getNavItemStyle = (link: string) =>
    classNames(NavItemsStyle["nav-item"], {
      [NavItemsStyle["itemActive"]]: router.pathname === link,
    });

  return (
    <div className={MobileNavStyle["mobile-navigation-wrapper"]}>
      <button
        className={MobileNavStyle["button-icon"]}
        onClick={() => toggleNav(false)}
      >
        <img src="icons/close.svg" alt="close icon" />
      </button>

      <ul>
        {navItems
          .filter(
            (item) => item.label !== "facebook" && item.label !== "instagram"
          )
          .map((item) => {
            return (
              <li key={item.label}>
                <Link
                  onClick={() => toggleNav(false)}
                  className={getNavItemStyle(item.link)}
                  href={item.link}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

        <li className="flex">
          {navItems
            .filter(
              (item) => item.label === "facebook" || item.label === "instagram"
            )
            .map((item) => {
              return (
                <Link
                  key={item.label}
                  className="social"
                  target="_blank"
                  href={item.link}
                >
                  <img
                    width="32"
                    height="32"
                    src={`icons/${item.label}.svg`}
                    alt={`${item.label} account`}
                  />
                </Link>
              );
            })}
        </li>
      </ul>
    </div>
  );
};
