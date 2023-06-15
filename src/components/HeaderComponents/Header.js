import Navigation from "./Navigation";
import logo from "./../../assets/Logo.svg";

import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    setIsNavOpen(false);
    setIsButtonActive(false);
  }, [props.location]);

  useEffect(() => {
    const closeOnClickOutside = (event) => {
      if (
        event.target.closest(`.${classes.hamburger__container}`) ||
        event.target.closest(`.${classes.header}`)
      ) {
        return;
      }
      setIsNavOpen(false);
      setIsButtonActive(false);
    };

    window.removeEventListener("click", closeOnClickOutside);

    return () => {
      window.addEventListener("click", closeOnClickOutside);
    };
  }, [isNavOpen]);

  const openNavHandler = () => {
    setIsNavOpen((navState) => !navState);
    setIsButtonActive((isAvtive) => !isAvtive);
  };

  const buttonClasses = `${classes.hamburger__container} ${
    isButtonActive ? classes.active : ""
  }`;

  return (
    <header className={classes.header}>
      <div onClick={openNavHandler} className={buttonClasses}>
        <div className={classes.hamburger__container__btn}> </div>
      </div>
      <Link to="/">
        <img src={logo} alt="Little Lemon restaurant Logo" />
      </Link>
      <Navigation className={isNavOpen} />
    </header>
  );
};

export default Header;
