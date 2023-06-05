import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={props.src} alt={props.alt} />
      <div className={classes.card__content}>
        <div className={classes.card__header}>
          <p className={classes.card__header__title}>{props.title}</p>
          <p className={classes.card__header__price}>{props.price}</p>
        </div>
        <p className={classes.card__text}>{props.text}</p>
        <div className={classes.card__link}>
          <a className={classes.card__link__order} href={props.href}>
            {props.linkText}
          </a>
          <img
            className={classes.card__link__icon}
            src={props.iconSrc}
            alt={props.iconAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
