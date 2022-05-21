import styles from "./Button.module.css";
export const Button = (props) => {
  return (
    <button className={props.primary ? styles["primary"] : styles["secondary"]}>
      {props.children}
    </button>
  );
};
