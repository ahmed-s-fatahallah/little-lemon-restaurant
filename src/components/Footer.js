import FooterLogo from "./../assets/Lemon-Logo.JPG";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={FooterLogo} alt="Little Lemon restaurant Logo" />
      </div>
      <FooterNav />
      <FooterContact />
      <FooterSocials />
    </footer>
  );
};

export default Footer;
