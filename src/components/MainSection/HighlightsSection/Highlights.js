import MainButton from "../../../Utlities/MainLinkButton";
import CardsSection from "./CardsSection";

import classes from "./Highlights.module.css";

const Highlights = () => {
  return (
    <section className={classes.highlights}>
      <div className={classes.highlights__header}>
        <h3 className={classes.highlights__header__title}>
          This week’s Specials!
        </h3>
        <MainButton link="menu" text="Online Menu" />
      </div>
      <CardsSection />
    </section>
  );
};

export default Highlights;
