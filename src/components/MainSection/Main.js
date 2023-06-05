import About from "./AboutSection/About";
import HeroSection from "./HeroSection/HeroSection";
import Highlights from "./HighlightsSection/Highlights";

import classes from "./Main.module.css";
import Testimonials from "./TestimonialsSection/Testimonials";

const Main = () => {
  return (
    <main className={classes["main-content"]}>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;
