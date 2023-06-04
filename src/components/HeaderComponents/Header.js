import Navigation from "./Navigation";
import logo from "./../../assets/Logo.svg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Little Lemon restaurant Logo" />
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
