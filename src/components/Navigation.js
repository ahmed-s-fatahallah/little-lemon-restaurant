import NavigationItem from "./NavigationItem";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={classes.nav__list}>
        <NavigationItem text="Home" link="#" />
        <NavigationItem text="About" link="#" />
        <NavigationItem text="Menu" link="#" />
        <NavigationItem text="Reservations" link="#" />
        <NavigationItem text="Order Online" link="#" />
        <NavigationItem text="Login" link="#" />
      </ul>
    </nav>
  );
};

export default Navigation;
