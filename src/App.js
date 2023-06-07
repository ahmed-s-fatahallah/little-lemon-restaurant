import { useReducer, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Booking from "./pages/Booking";
import Home from "./pages/Home";

import Root from "./pages/Root";
import About from "./pages/About";

const AVAILABLE_TIMES = ["16:00", "17:00", "18:00", "19:00", "20:00"];

const reducer = (state, action) => {
  if (action.type === "update") {
    const selectedTime = action.time;
    return state.filter((time) => time !== selectedTime);
  }
  return state;
};

function App() {
  const [availableTimes, dispatch] = useReducer(reducer, AVAILABLE_TIMES);

  const updateTimes = (time) => {
    dispatch({ type: "update", time: time });
  };
  const initializeTimes = () => {
    return availableTimes;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "booking",
          element: (
            <Booking
              availableTimes={availableTimes}
              setAvailableTimes={updateTimes}
            />
          ),
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
