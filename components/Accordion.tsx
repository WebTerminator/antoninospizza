import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "@/styles/Accordion.module.css";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
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
  />
);

export const AccordionUI = ({
  items,
}: {
  items: { header: string; content: string }[];
}) => {
  return (
    <div className={styles.accordion}>
      <Accordion>
        {items.map(({ header, content }, i) => (
          <AccordionItem header={header} key={i}>
            {content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
