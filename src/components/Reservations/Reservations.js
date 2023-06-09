import classes from "./Reservations.module.css";

const Reservations = () => {
  const reservationsArr = JSON.parse(localStorage.getItem("reservations"));

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Time</th>
          <th>Number of Guests</th>
          <th>Occasion</th>
        </tr>
      </thead>
      <tbody>
        {reservationsArr.length === 0 ? (
          <tr>
            <td colSpan={5}>You have no Reservations</td>
          </tr>
        ) : (
          reservationsArr.map((res, i) => (
            <tr key={i}>
              <td>{res.id}</td>
              <td>{res.date}</td>
              <td>{res.time}</td>
              <td>{res.guests}</td>
              <td>{res.occasion}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Reservations;
