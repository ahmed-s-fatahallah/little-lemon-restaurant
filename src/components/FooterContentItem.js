const FooterContentItem = (props) => {
  return (
    <li>
      <a href={props.link}>{props.linkText}</a>
    </li>
  );
};

export default FooterContentItem;
