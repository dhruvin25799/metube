import { useModal } from "../../../context/modal-context";
import styles from "./Thumbnail.module.css";

export const Thumbnail = (props) => {
  const { modalStateDispatch } = useModal();
  return (
    <div className={styles["thumbnail-container"]}>
      <img
        className={styles["thumbnail"]}
        src={`https://img.youtube.com/vi/${props.data._id}/0.jpg`}
        alt=""
        onClick={() =>
          modalStateDispatch({ type: "OPEN", payload: props.data })
        }
      />
      <p className={styles["thumbnail-title"]}>{props.data.title}</p>
    </div>
  );
};
