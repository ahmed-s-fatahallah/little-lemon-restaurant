import { useCallback, useEffect, useReducer } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Root from "./pages/Root";
import About from "./pages/About";
import { fetchAPI } from "./JavaScript API file/raw.githubusercontent.com_Meta-Front-End-Developer-PC_capstone_master_api";

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
  console.log(availableTimes);

  const initializeTimes = (initialTimes) => {
    dispatch({ type: "initialTimes", initialTimes: initialTimes });
  };
  const updateTimes = (times) => {
    dispatch({ type: "dateUpdate", times: times });
  };

  const fetchData = useCallback(async () => {
    const date = new Date();
    const times = await fetchAPI(date);
    initializeTimes(times);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
