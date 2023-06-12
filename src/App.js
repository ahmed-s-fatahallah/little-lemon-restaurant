import { RouterProvider, createHashRouter } from "react-router-dom";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Root from "./pages/Root";
import ReservationsPage from "./pages/Reservations";
import Confirmation from "./pages/Confirmation";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

function App() {
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
          element: <Booking />,
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
