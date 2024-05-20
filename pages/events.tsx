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
        description="Are you hosting a birthday party, wedding, work gathering or any other event? Antonino’s Pizza will bring to you Neapolitan style Pizza (and people) on board of a 1988 vintage Piaggio Ape Car making your special occasion unforgettable."
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
              <h3>Bring your mobile pizzeria to you</h3>
              <p>
                Are you hosting a birthday party, wedding, work gathering or any
                other event?
              </p>

              <p>
                Antonino’s Pizza will bring to you Neapolitan style Pizza (and
                people) on board of a 1988 vintage Piaggio Ape Car making your
                special occasion unforgettable.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="container-small">
        <EventsForm />
      </div>
    </>
  );
}
