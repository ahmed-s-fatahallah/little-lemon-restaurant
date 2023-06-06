import { useState } from "react";
import MainButton from "../../Utlities/MainButton";
import classes from "./BookingForm.module.css";

const BookingForm = () => {
  const [dateInput, setDateInput] = useState("");
  const [timeSelect, setTimeSelect] = useState("");
  const [guestsInput, setGuestsInput] = useState("");
  const [occasionSelect, setOccasionSelect] = useState("");

  let isBtnDisabled = true;

  const dateInputHandler = (event) => {
    setDateInput(event.target.value);
  };
  const timeSelectHandler = (event) => {
    setTimeSelect(event.target.value);
  };
  const guestsInputHandler = (event) => {
    setGuestsInput(event.target.value);
  };
  const occasionSelectHandler = (event) => {
    setOccasionSelect(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(
      `date: ${dateInput}, time: ${timeSelect}, guests number: ${guestsInput}, occasion: ${occasionSelect}`
    );
  };

  if (
    dateInput !== "" &&
    timeSelect !== "" &&
    guestsInput !== "" &&
    occasionSelect !== ""
  ) {
    isBtnDisabled = false;
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <label htmlFor="res-date">Choose date</label>
      <input
        onChange={dateInputHandler}
        value={dateInput}
        type="date"
        id="res-date"
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={timeSelectHandler} value={timeSelect}>
        <option value="" disabled hidden>
          None
        </option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={guestsInputHandler}
        value={guestsInput}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={occasionSelectHandler}
        value={occasionSelect}
      >
        <option value="" disabled hidden>
          None
        </option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <MainButton
        disabled={isBtnDisabled}
        type="submit"
        text="Make your Reservation"
      />
    </form>
  );
};

export default BookingForm;
