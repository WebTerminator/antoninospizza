import { NextSeo } from "next-seo";
import { MultiImg } from "@/components/MultiImg";

export default function ContactUs() {
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

        <p>You can find us at the following locations:</p>

        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.stnicssutton.co.uk/attic-traders/antoninos-pizza/"
            >
              St Nicholas Shopping Centre in Sutton
            </a>
          </li>
          <li>
            Sat 10AM-16PM,{" "}
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Duke+of+York+Square/@51.4914214,-0.1598008,15z/data=!4m6!3m5!1s0x48760515cdacfafb:0x2f07d2140f8c5c83!8m2!3d51.4914214!4d-0.1598008!16s%2Fg%2F1hc4pg4sb?entry=ttu"
            >
              Duke of York square, London
            </a>
          </li>
        </ul>

        <p>
          or you can gives us a call on:{" "}
          <a href="tel:+4733378901">+44 7476 110747</a>
        </p>

        <a
          style={{ marginLeft: "25px" }}
          className="button"
          href="mailto:a.santorufo@icloud.com"
        >
          Contact us
        </a>
      </div>
    </>
  );
}
