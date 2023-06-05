import TestimonialCard from "./TestimonialCard";

import starIcon from "./../../../assets/star.png";
import womanPhoto from "./../../../assets/photo-1627393100177-b4297e79a5be.webp";
import laughingGuy from "./../../../assets/photo-1595152772835-219674b2a8a6.webp";
import oldWoman from "./../../../assets/photo-1547212371-eb5e6a4b590c.webp";
import AsianGuy from "./../../../assets/photo-1542909168-82c3e7fdca5c.webp";

import classes from "./TestimonialsCards.module.css";

const TestimonialsCards = () => {
  return (
    <div className={classes.testimonials__cards}>
      <TestimonialCard
        starIcon={starIcon}
        starAlt="A rating star"
        photoSrc={womanPhoto}
        photoAlt="A woman in black shirt"
        name="Sarah Lopez"
        user="Sara72"
        testimonialText="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"
      />
      <TestimonialCard
        starIcon={starIcon}
        starAlt="Arating star"
        photoSrc={laughingGuy}
        photoAlt="A guy in a black shirt laughing"
        name="John Do"
        user="Johnny_Utah"
        testimonialText="“We had such a great time celebrating my grandmothers birthday!”"
      />
      <TestimonialCard
        starIcon={starIcon}
        starAlt="A rating star"
        photoSrc={oldWoman}
        photoAlt="An old woman in blue shirt"
        name="Sarah Lopez"
        user="Sara72"
        testimonialText="“Best Feta Salad in town. Flawless everytime!”"
      />
      <TestimonialCard
        starIcon={starIcon}
        starAlt="A rating star"
        photoSrc={AsianGuy}
        photoAlt="An asian guy"
        name="Sarah Lopez"
        user="Sara72"
        testimonialText="“Such a chilled out atmosphere - love it!”"
      />
    </div>
  );
};

export default TestimonialsCards;
