import { useRef, useState } from "react";
import { useEffect } from "react";
import MainBtn from "../../Utlities/MainBtn";
import { createPortal } from "react-dom";
import MainButton from "../../Utlities/MainLinkButton";

import classes from "./Reservations.module.css";

const Reservations = () => {
  const [reservationsArr, setReservationsArr] = useState([]);
  const [resId, setResId] = useState("");
  const dialogRef = useRef();

  useEffect(() => {
    const storedReservationsArr = JSON.parse(
      localStorage.getItem("reservations")
    );
    if (storedReservationsArr) {
      setReservationsArr(storedReservationsArr);
    }
  }, []);

  const confirmHandler = (id) => {
    const updatedReservationsArr = reservationsArr.filter(
      (res) => res.id !== id
    );
    localStorage.setItem(
      "reservations",
      JSON.stringify(updatedReservationsArr)
    );
    setReservationsArr(updatedReservationsArr);
    dialogRef.current.close();
  };

  const cancelHandler = () => {
    dialogRef.current.close();
  };

  const cancelReservationHandler = (id) => {
    dialogRef.current.showModal();
    setResId(id);
  };

  return (
    <section className={classes["res-section"]}>
      {createPortal(
        <dialog className={classes.popup} ref={dialogRef}>
          <p>Are you sure you want to cancel</p>
          <div className={classes.popup__btns}>
            <MainBtn
              disabled={false}
              type="button"
              text="Confirm"
              onClick={confirmHandler.bind(null, resId)}
            />
            <MainBtn
              disabled={false}
              type="button"
              text="Cancel"
              onClick={cancelHandler}
            />
          </div>
        </dialog>,
        document.getElementById("popups")
      )}
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Time</th>
            <th>Number of Guests</th>
            <th>Occasion</th>
            <th>Cancellation</th>
          </tr>
        </thead>
        <tbody>
          {reservationsArr.length === 0 ? (
            <tr>
              <td colSpan={6}>You have no Reservations</td>
            </tr>
          ) : (
            reservationsArr.map((res, i) => (
              <tr key={i}>
                <td>{res.id}</td>
                <td>{res.date}</td>
                <td>{res.time}</td>
                <td>{res.guests}</td>
                <td>{res.occasion}</td>
                <td>
                  <MainBtn
                    disabled={false}
                    type="button"
                    text="Cancel"
                    onClick={cancelReservationHandler.bind(null, res.id)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <MainButton link="/booking" text="Reserve a Table" />
    </section>
  );
};

export default Reservations;
