import classes from "./MainButton.module.css";

const MainButton = (props) => {
  return (
    <button type={props.type} className={classes.btn}>
      {props.text}
    </button>
  );
};

export default MainButton;
