import classes from "./MainBtn.module.css";

const MainBtn = (props) => {
  return (
    <button
      className={classes.btn}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default MainBtn;
