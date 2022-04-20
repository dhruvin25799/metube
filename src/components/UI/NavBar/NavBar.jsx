import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import { useAuth } from "../../../context/auth-context";
import { useUserData } from "../../../context/userdata-context";
export const NavBar = () => {
  const { authState, authStateDispatch } = useAuth();
  const { userDataDispatch } = useUserData();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`${styles["nav"]} ${!isScrolled && styles["transparent"]}`}
      >
        <Link to="/" className={styles["nav-brand"]}>
          <FontAwesomeIcon icon={faPhotoFilm} size="2x" />
          MeTube
        </Link>
        <menu className={styles["nav-links"]}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mylist">My list</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact Us</NavLink>
          </li>
        </menu>
        <menu className={styles["nav-cta"]}>
          <li>
            {authState.isLoggedIn ? (
              <Button
                primary={true}
                onClick={() => {
                  authStateDispatch({ type: "LOGOUT" });
                  userDataDispatch({ type: "LOGOUT" });
                }}
              >
                Logout
              </Button>
            ) : (
              <Button primary={true}>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </li>
        </menu>
      </nav>
    </>
  );
};
