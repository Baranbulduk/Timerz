import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";
import SetTimer from "../pages/SetTimer";
import Alarm from "../pages/Alarm";
import AnalogTimer from "../pages/AnalogTimer";
import DigitalTimer from "../pages/DigitalTimer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
  },
  {
    path: "/set-timer",
    element: <SetTimer />,
  },
  {
    path: "/alarm",
    element: <Alarm />,
  },
  {
    path: "/analog-timer",
    element: <AnalogTimer />,
  },
  {
    path: "/digital-timer",
    element: <DigitalTimer />,
  },
]);

export default router;
