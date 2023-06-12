import { useCallback, useEffect, useReducer } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Root from "./pages/Root";
import ReservationsPage from "./pages/Reservations";

import {
  fetchAPI,
  submitAPI,
} from "./JavaScript API file/raw.githubusercontent.com_Meta-Front-End-Developer-PC_capstone_master_api";
import Confirmation from "./pages/Confirmation";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

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

function App() {
  const [availableTimes, dispatch] = useReducer(reducer, []);

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

  const fetchData = useCallback(async () => {
    const date = new Date();
    const times = await fetchAPI(date);
    initializeTimes(times);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "booking",
          element: (
            <Booking
              availableTimes={availableTimes}
              setAvailableTimes={updateTimes}
              submitForm={submitForm}
            />
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "booking/confirmed/:id",
          element: <Confirmation />,
          errorElement: <ErrorPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "reservations",
          element: <ReservationsPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
