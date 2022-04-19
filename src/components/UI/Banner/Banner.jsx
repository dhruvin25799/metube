import React from "react";
import ReactPlayer from "react-player";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import styles from "./Banner.module.css";
import { useModal } from "../../../context/modal-context";

export const Banner = (props) => {
  const { modalStateDispatch } = useModal();
  return (
    <>
      <section className={styles["banner"]}>
        <div className={styles["banner-img"]}>
          <img
            src={`https://img.youtube.com/vi/${props.data._id}/maxresdefault.jpg`}
            alt=""
          />
        </div>
        <div className={styles["banner-text"]}>
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
        </div>
        <div className={styles["banner-cta"]}>
          <Button
            primary={true}
            onClick={() => modalStateDispatch({type: "OPEN", payload: props.data})}
          >
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
