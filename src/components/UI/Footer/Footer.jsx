import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        <div className={styles["footer-section"]}>
          <div className={styles["nav-brand"]}>
            <FontAwesomeIcon icon={faPhotoFilm} />
            MeTube
          </div>
          <p>
            MeTube is a video library that holds all your favourite videos. Plus
            gives you an option to have a watchlist.
          </p>
        </div>
        <div className={styles["footer-section"]}>
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>
            <li>Login</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles["footer-section"]}>
          <h4>Social Media</h4>
          <ul className={styles["social-links"]}>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
        </div>
        <div className={styles["footer-section"]}>
          <h4>Our team</h4>
          <p>
            Made with <FontAwesomeIcon icon={faHeart} /> by Dhruvin Mehta.
          </p>
        </div>
      </footer>
    </>
  );
};
