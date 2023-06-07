import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={classes.nav__list__item}>
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? classes.active : null)}
        end
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
