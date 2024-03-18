import { NextSeo } from "next-seo";
import { MultiImg } from "@/components/MultiImg";
import Map from "@/components/Map";
import styles from "@/styles/Contact.module.css";

const Info = () => (
  <div className={styles["info-wrapper"]}>
    <h3
      style={{
        marginBottom: "10px",
      }}
    >
      Contact us
    </h3>
    <div className={styles["icon-text-wrapper"]}>
      <img className={styles["icon-svg"]} src="/icons/marker-s.svg" />
      <p className={styles["icon-text"]}>Addresses</p>
    </div>
    <address className={styles["address"]}>
      <p style={{ marginBottom: "0" }}>- St Nicholas Way, Sutton SM1 1AY</p>
      <p>- Duke of York square, Sloan Square, London</p>
    </address>

    <div className={styles["icon-text-wrapper"]}>
      <img className={styles["icon-svg"]} src="/icons/phone.svg" />
      <p className={styles["icon-text"]}>Phone</p>
    </div>
    <a className={styles["link"]} href="tel:+4733378901">
      +44 7476 110747
    </a>

    <div className={styles["icon-text-wrapper"]}>
      <img className={styles["icon-svg"]} src="/icons/email.svg" />
      <p className={styles["icon-text"]}>Email</p>
    </div>
    <a className={styles["link"]} href="mailto:a.santorufo@icloud.com">
      a.santorufo@icloud.com
    </a>

    <h3
      style={{
        marginBottom: "10px",
      }}
    >
      Opening times
    </h3>
    <p className={styles["location-title"]}>Sutton</p>
    <p style={{ marginBottom: "0" }}>
      <span className="bold">Mon - Thu: </span>
      12AM - 9PM
    </p>
    <p>
      <span className="bold">Fri - Sun: </span>
      12AM - 11PM
    </p>

    <p className={styles["location-title"]}>Sloan Square</p>
    <p style={{ marginBottom: "0" }}>
      <span className="bold">Sat: </span>
      12AM - 4PM
    </p>
  </div>
);

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact us - Antonino's Pizza"
        canonical="https://www.antoninospizza.co.uk/contact"
      />
      <div className="container-small">
        <h2 className="h2">Get in touch</h2>

        <MultiImg
          topLeftImg={{
            src: "contact/top-left",
            alt: "tomato illustration",
          }}
          mainImg={{
            src: "contact/us",
            alt: "ape car display",
          }}
          bottomRightImg={{
            src: "contact/bottom-right",
            alt: "olives illustration",
          }}
          text={[
            "We are always here to answer any questions you may have about our restaurant or our menu. Please don't hesitate to get in touch. We are always here to help and would love to hear from you",
            "Thank you for choosing Antonino’s, and we hope to see you soon!",
          ]}
        />
      </div>

      <div className={styles["map-info-wrapper"]}>
        <Map
          locations={[
            {
              lat: 51.4914214,
              lon: -0.1598008,
            },
            {
              lat: 51.36485,
              lon: -0.19443,
            },
          ]}
          className={styles["contact-map"]}
        />
        <Info />
      </div>

      <div>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        />
        <div
          className="elfsight-app-1d0d17b8-c7f1-49f5-8091-96f118c9fd64"
          data-elfsight-app-lazy
        />
      </div>
    </>
  );
}
