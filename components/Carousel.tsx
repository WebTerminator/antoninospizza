import Slider from "react-slick";
import { Img } from "./Img";
import styles from "@/styles/MultiImg.module.css";

export const Carousel = (props: {
  images: {
    url: string;
    alt: string;
  }[];
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  if (props.images.length === 0) return null;

  return (
    <div
      style={{
        paddingBottom: "2rem",
        marginBottom: "1rem",
      }}
    >
      <div className={styles["section"]}>
        <div className={styles["header-tl"]}>
          <Img url={`/imgs/about/header-tl.png`} alt="" />
        </div>
        <Slider {...settings}>
          {props.images.map((img) => (
            <div key={img.url}>
              <Img alt={img.alt} url={img.url} />
            </div>
          ))}
        </Slider>
        <div className={styles["header-br"]}>
          <Img url={`/imgs/about/header-br.png`} alt="" />
        </div>
      </div>
    </div>
  );
};
