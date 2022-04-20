import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../../context/modal-context";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { addToList } from "../../../helpers/postData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserData } from "../../../context/userdata-context";
import { useAuth } from "../../../context/auth-context";
import { isInList } from "../../../helpers/isInFunctions";
import { removeFromList } from "../../../helpers/deleteData";

export const Modal = () => {
  const { userData, userDataDispatch } = useUserData();
  const { authState } = useAuth();
  const { modalStateDispatch, modalState } = useModal();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const isAlreadyAdded = isInList(userData.watchlater, modalState.data);
  const addToListHandler = async () => {
    try {
      const data = await addToList({
        video: modalState.data,
        token: authState.token,
      });
      userDataDispatch({ type: "LIST", payload: data.watchlater });
      toast.success("Movie added to your list", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const removeFromListHandler = async () => {
    try {
      const data = await removeFromList({
        video: modalState.data,
        token: authState.token,
      });

      userDataDispatch({ type: "LIST", payload: data.watchlater });
      toast.success("Movie removed from your list", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <div className={`${styles["modal"]} ${isMounted && styles["show"]}`}>
        <div
          className={styles["modal-close-btn"]}
          onClick={() => {
            setIsMounted(false);
            setTimeout(() => {
              modalStateDispatch({ type: "CLOSE" });
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
        <div className={styles["modal-cta"]}>
          {isAlreadyAdded ? (
            <Button onClick={removeFromListHandler}>Remove from List</Button>
          ) : (
            <Button primary={true} onClick={addToListHandler}>
              Add to my List
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
