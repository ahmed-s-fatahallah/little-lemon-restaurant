import classes from "./FooterContentItem.module.css";

const FooterContentItem = (props) => {
  return (
    <li className={classes.footer__item}>
      <a href={props.link}>{props.linkText}</a>
    </li>
  );
};

export default FooterContentItem;
