import FooterLogo from "./../assets/Lemon-Logo.JPG";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterSocials from "./FooterSocials";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={FooterLogo} alt="Little Lemon restaurant Logo" />
      <div className={classes.footer__content}>
        <FooterNav title="Navigation" />
        <FooterContact title="Contact" />
        <FooterSocials title="Social Media Links" />
      </div>
    </footer>
  );
};

export default Footer;
