import FooterContentItem from "./FooterContentItem";

const FooterNav = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <ul>
        <FooterContentItem link="/" linkText="Home" />
        <FooterContentItem link="/about" linkText="About" />
        <FooterContentItem link="/menu" linkText="Menu" />
        <FooterContentItem link="/reservations" linkText="Reservations" />
        <FooterContentItem link="/order" linkText="Order Online" />
      </ul>
    </div>
  );
};

export default FooterNav;
