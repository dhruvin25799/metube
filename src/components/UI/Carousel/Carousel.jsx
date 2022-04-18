import { Thumbnail } from "../Thumbnail/Thumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Carousel.module.css";
import { useRef, useState } from "react";

export const Carousel = (props) => {
  const [showLeft, setShowLeft] = useState(false);
  const carouselRef = useRef();
  const carouselScrollHandler = (arrow) => {
    setShowLeft(true);
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        arrow === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth"});
    }
  };
  return (
    <>
      <section className={styles["carousel-container"]}>
        <h1>Title</h1>
        <div className={styles["carousel"]}>
          <div className={styles["carousel-row"]} ref={carouselRef}>
            <div
              className={`${styles["left-arrow"]} ${
                !showLeft && styles["hidden"]
              }`}
              onClick={() => carouselScrollHandler("left")}
            >
              <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </div>
            <div
              className={styles["right-arrow"]}
              onClick={() => carouselScrollHandler("right")}
            >
              <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </div>
            <Thumbnail src="https://img.youtube.com/vi/mqqft2x_Aa4/0.jpg" />
            <Thumbnail src="https://img.youtube.com/vi/mqqft2x_Aa4/0.jpg" />
            <Thumbnail src="https://img.youtube.com/vi/mqqft2x_Aa4/0.jpg" />
            <Thumbnail src="https://img.youtube.com/vi/mqqft2x_Aa4/0.jpg" />
            <Thumbnail src="https://img.youtube.com/vi/mqqft2x_Aa4/0.jpg" />
            <Thumbnail src="https://img.youtube.com/vi/mqqft2x_Aa4/0.jpg" />
            <Thumbnail src="https://img.youtube.com/vi/mqqft2x_Aa4/0.jpg" />
            <Thumbnail src="https://img.youtube.com/vi/mqqft2x_Aa4/0.jpg" />
          </div>
        </div>
      </section>
    </>
  );
};
