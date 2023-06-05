import HeroSection from "./HeroSection/HeroSection";
import Highlights from "./HighlightsSection/Highlights";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes["main-content"]}>
      <HeroSection />
      <Highlights />
    </main>
  );
};

export default Main;
