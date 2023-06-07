import { Outlet } from "react-router-dom";
import Header from "../components/HeaderComponents/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
