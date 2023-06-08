import BookingForm from "../components/Booking/BookingForm";

const Booking = (props) => {
  return (
    <BookingForm
      availableTimes={props.availableTimes}
      setAvailableTimes={props.setAvailableTimes}
      submitForm={props.submitForm}
    />
  );
};

export default Booking;
