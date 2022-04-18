import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
export const NavBar = () => {
  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["nav-brand"]}>
          <FontAwesomeIcon icon={faPhotoFilm} size="2x" />
          MeTube
        </div>
        <menu className={styles["nav-links"]}>
          <li>Home</li>
          <li>My list</li>
          <li>Contact Us</li>
        </menu>
        <menu className={styles["nav-cta"]}>
          <li>CTA1</li>
          <li>CTA2</li>
          <li>CTA3</li>
        </menu>
      </nav>
    </>
  );
};
