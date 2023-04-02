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
        {navItems.map((item) => {
          if (item.label !== "facebook" && item.label !== "instagram") {
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
          }
        })}

        <li className="flex">
          <Link className="social" target="_blank" href={navItems[4].link}>
            <img
              width="32"
              height="32"
              src={`icons/${navItems[4].label}.svg`}
              alt={`${navItems[4].label} account`}
            />
          </Link>

          <Link className="social" target="_blank" href={navItems[5].link}>
            <img
              width="32"
              height="32"
              src={`icons/${navItems[5].label}.svg`}
              alt={`${navItems[5].label} account`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
