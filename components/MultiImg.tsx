/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/MultiImg.module.css";

interface MultiImgProps {
  mainImg: {
    src: string;
    alt: string;
  };
  topLeftImg: {
    src: string;
    alt: string;
  };
  bottomRightImg: {
    src: string;
    alt: string;
  };
  text: string[];
}

export const MultiImg = ({
  mainImg,
  topLeftImg,
  bottomRightImg,
  text,
}: MultiImgProps) => (
  <>
    <div className={styles["section"]}>
      <div className={styles["header-tl"]}>
        <img src={`imgs/${topLeftImg.src}.png`} alt={topLeftImg.alt} />
      </div>

      <img src={`imgs/${mainImg.src}.png`} alt={mainImg.alt} />

      <div className={styles["header-br"]}>
        <img src={`imgs/${bottomRightImg.src}.png`} alt={bottomRightImg.alt} />
      </div>
    </div>

    {text.map((item) => (
      <p key={item}>{item}</p>
    ))}
  </>
);
