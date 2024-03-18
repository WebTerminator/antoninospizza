import { NextSeo } from "next-seo";
import { MultiImg } from "@/components/MultiImg";
import { MapWithInfo } from "@/components/MapWithInfo";

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
