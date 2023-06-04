import FooterLogo from "./../assets/Lemon-Logo.JPG";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterSocials from "./FooterSocials";

import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer}>
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
