import Map from "@/components/Map";
import styles from "@/styles/MapWithInfo.module.css";

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
      <span className="bold">Mon: </span>
      Closed
    </p>
    <p style={{ marginBottom: "0" }}>
      <span className="bold">Tue - Thu: </span>
      12AM - 6PM
    </p>
    <p style={{ marginBottom: "0" }}>
      <span className="bold">Fri - Sat: </span>
      12AM - 9PM
    </p>
    <p>
      <span className="bold">Sun: </span>
      12AM - 5PM
    </p>

    <p className={styles["location-title"]}>Sloan Square</p>
    <p style={{ marginBottom: "0" }}>
      <span className="bold">Sat: </span>
      12AM - 4PM
    </p>
  </div>
);

export const MapWithInfo = () => {
  return (
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
  );
};
