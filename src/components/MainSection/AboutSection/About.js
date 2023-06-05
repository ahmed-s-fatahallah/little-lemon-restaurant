import chefsPhotoA from "./../../../assets/Mario and Adrian A resized.jpg";
import chefsPhotoB from "./../../../assets/Mario and Adrian b resized.jpg";

import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.about__content}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighborhood bistro that servers simple
          food and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials
        </p>
      </div>
      <div className={classes.about__photos}>
        <img
          className={classes.about__photos__2}
          src={chefsPhotoA}
          alt="the restaurant chefs"
        />
        <img
          className={classes.about__photos__1}
          src={chefsPhotoB}
          alt="the restaurant chefs"
        />
      </div>
    </section>
  );
};

export default About;
