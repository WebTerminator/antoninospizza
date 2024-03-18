import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import styles from "@/styles/Accordion.module.css";

export const AccordionUI = ({
  items,
}: {
  items: { header: string; content: string }[];
}) => {
  return (
    <div className={styles.accordion}>
      <Accordion>
        {items.map(({ header, content }, i) => (
          <AccordionItem
            header={
              <>
                {header}
                <img
                  className={styles.chevron}
                  src="icons/chevron-down.svg"
                  alt="Chevron Down"
                />
              </>
            }
            className={styles.item}
            buttonProps={{
              className: ({ isEnter }) =>
                `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
            }}
            contentProps={{ className: styles.itemContent }}
            panelProps={{ className: styles.itemPanel }}
            key={i}
          >
            {content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
