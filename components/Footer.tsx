/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { socilaLinks } from "@/shared/";
import styles from "@/styles/Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className="flex">
      <img src="Logo.svg" alt="Antonino's pizza logo" />
    </div>
    <p>
      © Antonino’s. All rights reserved. | Design by Nicola Piedimonte - Dev by
      Alessandro
    </p>
    <ul className={styles["footer-social-list"]}>
      {socilaLinks.map((item) => (
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
      ))}
    </ul>
  </footer>
);
