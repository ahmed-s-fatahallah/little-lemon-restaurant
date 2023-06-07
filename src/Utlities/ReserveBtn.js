import classes from "./ReserveBtn.module.css";

const ReserveBtn = (props) => {
  return (
    <button className={classes.btn} disabled={props.disabled} type={props.type}>
      {props.text}
    </button>
  );
};

export default ReserveBtn;
