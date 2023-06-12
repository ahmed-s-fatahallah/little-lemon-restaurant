import { useNavigate } from "react-router-dom";
import ConfirmedBooking from "../components/Booking/ConfirmedBooking";

const Confirmation = () => {
  const navigate = useNavigate();

  const navigateHandler = (path, options) => {
    navigate(path, options);
  };

  return <ConfirmedBooking navigate={navigateHandler} />;
};

export default Confirmation;
