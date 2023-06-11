import { Link } from "react-router-dom";
import classes from "./FooterContentItem.module.css";

const FooterContentItem = (props) => {
  return (
    <li className={classes.footer__item}>
      <Link to={props.link}>{props.linkText}</Link>
    </li>
  );
};

export default FooterContentItem;
