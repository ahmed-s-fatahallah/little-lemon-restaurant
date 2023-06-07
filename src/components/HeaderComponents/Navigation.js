import NavigationItem from "./NavigationItem";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={classes.nav__list}>
        <NavigationItem text="Home" link="/" />
        <NavigationItem text="About" link="about" />
        <NavigationItem text="Menu" link="menu" />
        <NavigationItem text="Reservations" link="reservations" />
        <NavigationItem text="Order Online" link="order" />
        <NavigationItem text="Login" link="#" />
      </ul>
    </nav>
  );
};

export default Navigation;
