import React from "react";
import ReactPlayer from "react-player";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <>
      <section className={styles["banner"]}>
        <div className={styles["banner-img"]}>
          <img
            src="https://img.youtube.com/vi/mqqft2x_Aa4/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className={styles["banner-text"]}>
          <h1>The Batman</h1>
          <p>It's not just a call… It's a warning.</p>
        </div>
        <div className={styles["banner-cta"]}>
          <Button primary={true}>
            <FontAwesomeIcon icon={faPlay} />
            Play Now
          </Button>
          <Button>
            <FontAwesomeIcon icon={faCircleInfo} />
            Add to my list
          </Button>
        </div>
      </section>
    </>
  );
};
