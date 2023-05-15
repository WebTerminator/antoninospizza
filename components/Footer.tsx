/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { sociaLinks } from "@/shared/";
import styles from "@/styles/Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className="flex">
      <img src="Logo.svg" alt="Logo" />
    </div>
    <p>
      © Antonino’s. All rights reserved. | Design by Nicola Piedimonte -
      Development by
      <a href="https://www.linkedin.com/in/as-web/"> Alessandro Santese</a>
    </p>
    <ul className={styles["footer-social-list"]}>
      {sociaLinks.map((item) => (
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
