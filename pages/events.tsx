import { NextSeo } from "next-seo";
import { EventsForm } from "@/components/EventsForm";
import { Img } from "@/components/Img";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <>
      <NextSeo
        title="Events - Antonino's Pizza"
        canonical="https://www.antoninospizza.co.uk/events"
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <section className={styles["section-reverse"]}>
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <div className={styles["small-img-left"]}>
              <Img url="/imgs/Home-ape.png" alt="Pizza illustration" />
            </div>
          </motion.div>

          <div>
            <div className={styles["small-text-right"]}>
              <h3>Bring the pizzeria to you with our ape car event</h3>
              <p>
                Experience fresh, hot pizza anywhere with our mobile pizzeria!
              </p>

              <ul>
                <li>
                  <p>Authentic Italian wood-fired pizza made fresh on-site</p>
                </li>
                <li>
                  <p>
                    Our signature pizza dough, fresh toppings, and homemade
                    sauce
                  </p>
                </li>
                <li>
                  <p>A fun, unique and memorable experience for any occasion</p>
                </li>
                <li>
                  <p>
                    Perfect for parties, corporate events, weddings, and more
                  </p>
                </li>
              </ul>
              {/* <a className="button" href="mailto:a.santorufo@icloud.com">
                Book your event today!
              </a> */}
            </div>
          </div>
        </section>
      </div>

      <div className="container-small">
        {/* <h2 className="h2">Events</h2> */}
        {/* <p>Let us know if you have any queries regarding a private event.</p> */}

        <EventsForm />
      </div>
    </>
  );
}
