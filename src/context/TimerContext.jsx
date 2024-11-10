import { createContext } from "react";
import useTimer from "easytimer-react-hook";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timer] = useTimer({
    countdown: true,
  });

  return (
    <TimerContext.Provider value={{ timer }}>{children}</TimerContext.Provider>
  );
};

export default TimerContext;
