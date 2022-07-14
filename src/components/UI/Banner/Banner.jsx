import React from "react";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import styles from "./Banner.module.css";
import { useModal } from "../../../context/modal-context";
import { useAuth } from "../../../context/auth-context";
import { addToList } from "../../../helpers/postData";
import { useUserData } from "../../../context/userdata-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isInList } from "../../../helpers/isInFunctions";

export const Banner = (props) => {
  const { modalStateDispatch } = useModal();
  const { authState } = useAuth();
  const { userData, userDataDispatch } = useUserData();
  const isAlreadyAdded = isInList(userData.watchlater, props.data);
  const sendRequest = async () => {
    try {
      const data = await addToList({
        video: props.data,
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
  return (
    <>
      <section className={styles["banner"]}>
        <div className={styles["banner-img"]}>
          <img
            src={`https://img.youtube.com/vi/${props.data._id}/maxresdefault.jpg`}
            alt=""
            className={styles["resp-img"]}
          />
        </div>
        <div className={styles["banner-text"]}>
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
        </div>
        <div className={styles["banner-cta"]}>
          <Button
            primary={true}
            onClick={() =>
              modalStateDispatch({ type: "OPEN", payload: props.data })
            }
          >
            <FontAwesomeIcon icon={faPlay} />
            Play Now
          </Button>
          <Button onClick={sendRequest} disabled={isAlreadyAdded}>
            <FontAwesomeIcon icon={faCircleInfo} />
            {isAlreadyAdded ? "Already in watch later" : "Add to watch later"}
          </Button>
        </div>
      </section>
    </>
  );
};
