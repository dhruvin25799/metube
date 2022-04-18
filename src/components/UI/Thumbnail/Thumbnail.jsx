import styles from "./Thumbnail.module.css"

export const Thumbnail = (props) => {
    return <img className={styles["thumbnail"]} src={props.src} alt=""/>
}