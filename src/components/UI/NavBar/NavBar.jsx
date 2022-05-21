import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 0){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () =>{
      window.removeEventListener("scroll", handleScroll);
    }

  },[]);
  return (
    <>
      <nav className={`${styles["nav"]} ${!isScrolled && styles["transparent"]}`}>
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
