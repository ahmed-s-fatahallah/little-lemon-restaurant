import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "./../components/FooterComponents/Footer";

const Root = () => {
  const location = useLocation();
  return (
    <>
      <Header location={location} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
