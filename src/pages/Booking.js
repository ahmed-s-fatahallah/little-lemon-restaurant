import { useNavigate } from "react-router-dom";
import BookingForm from "../components/Booking/BookingForm";

const Booking = (props) => {
  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);
  };

  return (
    <BookingForm
      navigate={navigateHandler}
      availableTimes={props.availableTimes}
      setAvailableTimes={props.setAvailableTimes}
      submitForm={props.submitForm}
    />
  );
};

export default Booking;
