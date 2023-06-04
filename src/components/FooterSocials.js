import FooterContentItem from "./FooterContentItem";
const FooterSocials = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <ul>
        <FooterContentItem
          link="https://www.facebook.com"
          linkText="Facebook"
        />
        <FooterContentItem link="https://www.twitter.com" linkText="Twitter" />
        <FooterContentItem
          link="https://www.instagram.com"
          linkText="Instagram"
        />
      </ul>
    </div>
  );
};

export default FooterSocials;
