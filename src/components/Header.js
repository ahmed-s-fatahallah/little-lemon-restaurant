import Navigation from "./Navigation";
import logo from "./../assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon restaurant Logo" />
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
