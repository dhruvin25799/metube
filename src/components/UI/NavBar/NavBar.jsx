import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoFilm,
  faHamburger,
  faPizzaSlice,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import { useAuth } from "../../../context/auth-context";
import { useUserData } from "../../../context/userdata-context";
import { useTheme } from "../../../context/theme-context";
export const NavBar = () => {
  const { isDark, setIsDark } = useTheme();
  const { authState, authStateDispatch } = useAuth();
  const { userDataDispatch } = useUserData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
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
        className={`${styles["nav"]} ${!isScrolled && styles["transparent"]} ${
          toggle && styles["display"]
        }`}
      >
        <div
          className={`${styles["nav-brand"]} ${toggle && styles["display"]}`}
        >
          <Link to="/" className={`${styles["nav-brand"]}`}>
            <FontAwesomeIcon icon={faPhotoFilm} size="2x" />
            MeTube
          </Link>
          {toggle && (
            <FontAwesomeIcon
              className={styles["nav-pizza"]}
              icon={faPizzaSlice}
              size="2x"
              onClick={() => setToggle(false)}
            />
          )}
        </div>
        {!toggle && (
          <div className={styles["nav-hamburger"]}>
            <FontAwesomeIcon
              icon={faHamburger}
              size="2x"
              onClick={() => setToggle((prevValue) => !prevValue)}
            />
          </div>
        )}

        <menu
          className={`${styles["nav-links"]} ${toggle && styles["display"]}`}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mylist">My list</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
        </menu>
        <menu className={`${styles["nav-cta"]} ${toggle && styles["display"]}`}>
          <li>
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              size="2x"
              onClick={() => setIsDark(!isDark)}
            />
          </li>
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
