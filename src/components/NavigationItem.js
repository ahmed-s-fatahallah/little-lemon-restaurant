import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={classes.nav__list__item}>
      <a href={props.link}>{props.text}</a>
    </li>
  );
};

export default NavigationItem;
