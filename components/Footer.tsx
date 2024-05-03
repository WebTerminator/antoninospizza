import Link from "next/link";
import { sociaLinks } from "@/shared/";
import styles from "@/styles/Footer.module.css";

export const Footer = () => (
  <>
    <div className={styles["footer-links"]}>
      <div>
        <p style={{ fontWeight: "bold" }}>About Antonino&apos;s</p>
        <Link href={"/about"}>About us</Link>
        <Link href={"/contact"}>Contact us</Link>
        <Link href={"/events"}>Events</Link>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>Shop</p>
        <Link href={"/shop"}>All products</Link>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>Help and info</p>
        <Link href={"/faq"}>FAQ</Link>
      </div>
    </div>
    <footer className={styles["footer"]}>
      <div className="flex">
        <img
          className={styles["img"]}
          src="Logo.svg"
          alt="Antonino's pizza logo"
        />
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
  </>
);
