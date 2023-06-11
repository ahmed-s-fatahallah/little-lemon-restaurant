import Footer from "../components/FooterComponents/Footer";
import Header from "../components/HeaderComponents/Header";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <h1 className={classes.error__msg}>Page under construction</h1>
      <Footer />
    </>
  );
};

export default ErrorPage;
