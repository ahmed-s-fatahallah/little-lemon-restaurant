import classes from "./Testimonials.module.css";
import TestimonialsCards from "./TestimonialsCards";

const Testimonials = () => {
  return (
    <section className={classes.testimonials}>
      <h3 className={classes.testimonials__title}>Testimonials</h3>
      <TestimonialsCards />
    </section>
  );
};

export default Testimonials;
