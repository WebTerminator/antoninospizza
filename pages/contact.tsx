import { NextSeo } from "next-seo";
import { MultiImg } from "@/components/MultiImg";
import { MapWithInfo } from "@/components/MapWithInfo";
import { Widget } from "@/components/Widget";

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

      <MapWithInfo />

      <div style={{ maxWidth: "1200px", margin: "0 auto 60px" }}>
        <Widget source="instagram" />
      </div>
    </>
  );
}
