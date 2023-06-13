import Navigation from "./Navigation";
import logo from "./../../assets/Logo.svg";

import classes from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    setIsNavOpen(false);
    setIsButtonActive(false);
  }, [props.location]);

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
      <img src={logo} alt="Little Lemon restaurant Logo" />
      <Navigation className={isNavOpen} />
    </header>
  );
};

export default Header;
