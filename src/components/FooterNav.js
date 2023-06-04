import FooterContentItem from "./FooterContentItem";

const FooterNav = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <ul>
        <FooterContentItem link="#" linkText="Home" />
        <FooterContentItem link="#" linkText="About" />
        <FooterContentItem link="#" linkText="Menu" />
        <FooterContentItem link="#" linkText="Reservations" />
        <FooterContentItem link="#" linkText="Order Online" />
        <FooterContentItem link="#" linkText="Login" />
      </ul>
    </div>
  );
};

export default FooterNav;
