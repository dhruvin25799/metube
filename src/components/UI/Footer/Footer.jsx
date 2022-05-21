import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="mylist">My List</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer-section"]}>
          <h4>Social Media</h4>
          <ul className={styles["social-links"]}>
            <li>
              <a href="https://github.com/dhruvin25799">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dhruvin-mehta-21a8a7190/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
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
            Made with <FontAwesomeIcon className={styles["heart-icon"]} icon={faHeart} /> by Dhruvin Mehta.
          </p>
        </div>
      </footer>
    </>
  );
};
