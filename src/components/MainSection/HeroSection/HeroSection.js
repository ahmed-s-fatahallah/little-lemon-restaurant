import restaurantFood from "./../../../assets/restauranfood.jpg";
import MainButton from "../../../Utlities/MainLinkButton";

import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__content}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className={classes.hero__text}>
          We are family owned Mediterranean restaurant, focused on traditional
          recipes served with modern twist.
        </p>
        <MainButton link="booking" text="Reserve a Table" />
      </div>
      <img
        className={classes.hero__img}
        src={restaurantFood}
        alt="A chef holding a smaple of the restaurant food"
      />
    </section>
  );
};

export default HeroSection;
