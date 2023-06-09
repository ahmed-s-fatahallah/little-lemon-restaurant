import { createContext } from "react";

export const AppStore = createContext({
  isLoggedIn: false,

  addReservation: () => {},
});

const AppStoreProvider = (props) => {
  const addReservation = (resData) => {
    const prevRes = JSON.parse(localStorage.getItem("reservations"));
    localStorage.setItem("reservations", JSON.stringify([...prevRes, resData]));
  };

  return (
    <AppStore.Provider value={{ addReservation }}>
      {props.children}
    </AppStore.Provider>
  );
};

export default AppStoreProvider;
