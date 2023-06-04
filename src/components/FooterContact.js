import FooterContentItem from "./FooterContentItem";

const FooterContact = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <ul>
        <FooterContentItem link="#" linkText="Address" />
        <FooterContentItem link="tel:" linkText="Phone Number" />
        <FooterContentItem link="mailto:" linkText="Email" />
      </ul>
    </div>
  );
};

export default FooterContact;
