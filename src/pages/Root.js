import { Outlet } from "react-router-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "./../components/FooterComponents/Footer";

const Root = () => {
  return (
    <body>
      <Header />
      <Outlet />
      <Footer />
    </body>
  );
};

export default Root;
