import { AccordionUI } from "@/components/Accordion";
import styles from "@/styles/Home.module.css";

const FAQ = () => {
  const items = [
    {
      header: "What is a vacuum pizza?",
      content:
        "A vacuum pizza is a specialised type of pizza that undergoes a vacuum-sealing process to preserve its freshness, flavour, and quality for an extended period.",
    },
    {
      header: "Are vacuum pizzas fresh?",
      content:
        "Yes, vacuum pizzas are fresh and retain their quality for a longer duration compared to traditional pizzas.",
    },
    {
      header: "How long do vacuum pizzas last?",
      content:
        "Vacuum pizzas can last for several weeks when stored properly in a refrigerator or freezer, maintaining their taste and quality.",
    },
    {
      header: "Do vacuum pizzas require special storage?",
      content:
        "Yes, it is recommended to store vacuum pizzas in a refrigerator or freezer to preserve their freshness. Follow the storage instructions provided with the product for the best results.",
    },
    {
      header: "Can I customise my vacuum pizza order?",
      content: "Xxx",
    },
    {
      header: "How are vacuum pizzas delivered?",
      content:
        "Vacuum pizzas are carefully packaged and shipped to your doorstep using reliable delivery services. We ensure that they arrive fresh and in optimal condition.",
    },
    {
      header: "What is the reheating process for vacuum pizzas?",
      content:
        "Reheating instructions are provided with each vacuum pizza order. Typically, you can reheat the pizza in an oven or microwave following the recommended time and temperature settings.",
    },
    {
      header: "Do you offer bulk ordering options for vacuum pizzas?",
      content:
        "Yes, we offer bulk ordering options for events, parties, or any large gatherings. Please contact us directly to discuss your specific requirements and pricing options.",
    },
    {
      header: "How can I pay for my vacuum pizza order?",
      content:
        "We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment options. Your payment information is encrypted and securely processed to ensure privacy and security.",
    },
    {
      header: "Do you collect customer data?",
      content:
        "We collect necessary customer data to process orders and provide better service, adhering to strict privacy policies. Your information is kept confidential and not shared with third parties without your consent.",
    },
  ];

  return (
    <>
      <section className={styles.section}>
        <div>
          <div className={styles["small-text-left"]}>
            <h3>Get answers to your questions here</h3>
            <p>
              Quickly find solutions to common queries and navigate through our
              collection of frequently asked questions to get the assistance you
              need.
            </p>
          </div>
        </div>

        <div className={styles["small-img-right"]}>
          <img src="imgs/faq/faq.png" alt="Pizza illustration" />
        </div>
      </section>
      <div className="container-small">
        <h2 className="h2">Frequently Asked Questions</h2>
        <AccordionUI items={items} />
      </div>
    </>
  );
};

export default FAQ;
