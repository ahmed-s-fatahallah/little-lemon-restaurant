import { createContext } from "react";

export const AppStore = createContext({
  addReservation: () => {},
});

const AppStoreProvider = (props) => {
  const addReservation = (resData) => {
    const prevRes = JSON.parse(localStorage.getItem("reservations"));
    if (prevRes) {
      localStorage.setItem(
        "reservations",
        JSON.stringify([...prevRes, resData])
      );
    } else {
      localStorage.setItem("reservations", JSON.stringify([resData]));
    }
  };

  return (
    <AppStore.Provider value={{ addReservation }}>
      {props.children}
    </AppStore.Provider>
  );
};

export default AppStoreProvider;
