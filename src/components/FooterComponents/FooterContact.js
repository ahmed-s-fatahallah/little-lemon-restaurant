import classes from "./FooterContact.module.css";

const FooterContact = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <ul className={classes["contact-items"]}>
        <li>Address: 22 Chicago Way, IL, Chicago</li>
        <li>
          <a href="tel:+1123456789">Telephone: +1123456789</a>
        </li>
        <li>
          <a href="mailto:contact@littlelemon.com">
            Email: contact@littlelemon.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
