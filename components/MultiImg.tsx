import styles from "@/styles/MultiImg.module.css";
import { Img } from "@/components/Img";

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
        <Img url={`/imgs/${topLeftImg.src}.png`} alt={topLeftImg.alt} />
      </div>

      <Img url={`/imgs/${mainImg.src}.png`} alt={mainImg.alt} />

      <div className={styles["header-br"]}>
        <Img url={`/imgs/${bottomRightImg.src}.png`} alt={bottomRightImg.alt} />
      </div>
    </div>

    {text.map((item) => (
      <p key={item}>{item}</p>
    ))}
  </>
);
