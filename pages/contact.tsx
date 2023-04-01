import { MultiImg } from "@/components/MultiImg";
import styles from "@/styles/Contact.module.css";

export default function ContactUs() {
  return (
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
          "We are always here to answer any questions you may have about our restaurant or our menu Please don't hesitate to get in touch. We are always here to help and would love to hear from you",
          "Thank you for choosing Antonino’s, and we hope to see you soon!",
        ]}
      />

      <a
        style={{ marginLeft: "25px" }}
        className="button"
        href="mailto:a.santorufo@icloud.com"
      >
        Contact us
      </a>
    </div>
  );
}
