import { useEffect, useState } from "react";
import ReserveBtn from "../../Utlities/ReserveBtn";
import { fetchAPI } from "./../../JavaScript API file/raw.githubusercontent.com_Meta-Front-End-Developer-PC_capstone_master_api";
import { useNavigate } from "react-router-dom";

import classes from "./BookingForm.module.css";

const date = new Date();

const minDate =
  date.getFullYear() +
  "-" +
  String(date.getMonth() + 1).padStart(2, "0") +
  "-" +
  String(date.getDate()).padStart(2, "0");

const maxDate =
  date.getFullYear() +
  "-" +
  String(date.getMonth() + 3).padStart(2, "0") +
  "-" +
  String(date.getDate()).padStart(2, "0");

const BookingForm = (props) => {
  const [dateInput, setDateInput] = useState(minDate);
  const [timeSelect, setTimeSelect] = useState("");
  const [guestsInput, setGuestsInput] = useState("");
  const [occasionSelect, setOccasionSelect] = useState("");

  useEffect(() => {
    const chosenDate = new Date(dateInput);
    const availableTimes = fetchAPI(chosenDate);
    props.setAvailableTimes(availableTimes);
  }, [dateInput]);

  const navigate = useNavigate();

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

    setDateInput(minDate);
    setTimeSelect("");
    setGuestsInput("");
    setOccasionSelect("");

    const response = props.submitForm({
      dateInput,
      timeSelect,
      guestsInput,
      occasionSelect,
    });

    if (response) {
      navigate("confirmed");
    }
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
        min={minDate}
        max={maxDate}
        id="res-date"
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={timeSelectHandler} value={timeSelect}>
        <option value="" disabled hidden>
          None
        </option>
        {props.availableTimes.map((time, i) => (
          <option key={i} value={time}>
            {time}
          </option>
        ))}
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
      <ReserveBtn
        disabled={isBtnDisabled}
        type="submit"
        text="Make your Reservation"
      />
    </form>
  );
};

export default BookingForm;
