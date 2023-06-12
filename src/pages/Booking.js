import { useReducer, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/Booking/BookingForm";
import {
  fetchAPI,
  submitAPI,
} from "../JavaScript API file/raw.githubusercontent.com_Meta-Front-End-Developer-PC_capstone_master_api";

const reducer = (state, action) => {
  if (action.type === "initialTimes") {
    const initTimes = action.initialTimes;
    return [...initTimes];
  }
  if (action.type === "dateUpdate") {
    const newTimes = action.times;
    return [...newTimes];
  }

  return state;
};

const Booking = (props) => {
  const [availableTimes, dispatch] = useReducer(reducer, []);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    const date = new Date();
    const times = await fetchAPI(date);
    initializeTimes(times);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const initializeTimes = (initialTimes) => {
    dispatch({ type: "initialTimes", initialTimes: initialTimes });
  };

  const updateTimes = useCallback((times) => {
    dispatch({ type: "dateUpdate", times: times });
  }, []);

  const submitForm = async (formData) => {
    const response = await submitAPI(formData);

    return response;
  };

  const navigateHandler = (path) => {
    navigate(path);
  };

  return (
    <BookingForm
      navigate={navigateHandler}
      availableTimes={availableTimes}
      setAvailableTimes={updateTimes}
      submitForm={submitForm}
    />
  );
};

export default Booking;
