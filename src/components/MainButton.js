import classes from "./MainButton.module.css";

const MainButton = (props) => {
  return (
    <button className={classes.btn}>
      <p className={classes.btn__text}>{props.text}</p>
    </button>
  );
};

export default MainButton;
