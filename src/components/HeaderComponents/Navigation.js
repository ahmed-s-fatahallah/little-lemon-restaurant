import NavigationItem from "./NavigationItem";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const navClasses = `${classes.nav} ${props.className ? classes.open : ""}`;

  return (
    <nav className={navClasses}>
      <ul className={classes.nav__list}>
        <NavigationItem text="Home" link="/" />
        <NavigationItem text="About" link="about" />
        <NavigationItem text="Menu" link="menu" />
        <NavigationItem text="Reservations" link="reservations" />
        <NavigationItem text="Order Online" link="order" />
      </ul>
    </nav>
  );
};

export default Navigation;
