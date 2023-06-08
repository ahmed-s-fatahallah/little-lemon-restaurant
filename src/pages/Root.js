import { Outlet } from "react-router-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "./../components/FooterComponents/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
