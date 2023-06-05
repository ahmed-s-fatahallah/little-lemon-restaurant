import classes from "./TestimonialCard.module.css";

const TestimonialCard = (props) => {
  return (
    <div className={classes.testimonial}>
      <div className={classes.testimonial__rating}>
        <img
          className={classes.testimonial__rating__star}
          src={props.starIcon}
          alt={props.starAlt}
        />
        <img
          className={classes.testimonial__rating__star}
          src={props.starIcon}
          alt={props.starAlt}
        />
        <img
          className={classes.testimonial__rating__star}
          src={props.starIcon}
          alt={props.starAlt}
        />
        <img
          className={classes.testimonial__rating__star}
          src={props.starIcon}
          alt={props.starAlt}
        />
        <img
          className={classes.testimonial__rating__star}
          src={props.starIcon}
          alt={props.starAlt}
        />
      </div>
      <figure className={classes.testimonial__fig}>
        <img src={props.photoSrc} alt={props.photoAlt} />
        <figcaption className={classes.testimonial__fig__caption}>
          <cite className={classes.testimonial__author}>{props.name}</cite>
          <cite className={classes.testimonial__user}>{props.user}</cite>
        </figcaption>
        <blockquote className={classes.testimonial__quote}>
          {props.testimonialText}
        </blockquote>
      </figure>
    </div>
  );
};

export default TestimonialCard;
