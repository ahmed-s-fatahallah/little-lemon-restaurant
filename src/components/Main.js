import HeroSection from "./HeroSection";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes["main-content"]}>
      <HeroSection />
    </main>
  );
};

export default Main;
