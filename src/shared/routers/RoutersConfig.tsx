import { createBrowserRouter } from "react-router-dom";
import { CalendarPage } from "../../pages/calendar/calendar";
import { LoginPage } from "../../pages/login/login";
import { HomePage } from "../../pages/home/home";

export const paths = {
  home: "/",
  login: "/login",
  calendar: "/calendar",
};

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <HomePage />,
  },
  {
    path: paths.login,
    element: <LoginPage />,
  },
  {
    path: paths.calendar,
    element: <CalendarPage />,
  },
]);
