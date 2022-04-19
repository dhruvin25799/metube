import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../../context/modal-context";
import { useEffect, useState } from "react";

export const Modal = (props) => {
  const { modalStateDispatch, modalState } = useModal();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <div className={`${styles["modal"]} ${isMounted && styles["show"]}`}>
        <div
          className={styles["modal-close-btn"]}
          onClick={() => {
            setIsMounted(false);
            setTimeout(() => {
              modalStateDispatch({type: "CLOSE"});
            }, 500);
          }}
        >
          <FontAwesomeIcon icon={faClose} size="2x" />
        </div>
        <div>
          <iframe
            width="100%"
            height="350px"
            src={`https://www.youtube.com/embed/${modalState.data._id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles["modal-text"]}>
          <h1>{modalState.data.title}</h1>
          <p>{modalState.data.description}</p>
        </div>
      </div>
    </>
  );
};
