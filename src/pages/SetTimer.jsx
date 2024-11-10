import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TimerContext from "../context/TimerContext";
import Navigation from "../components/Navigation/Navigation.jsx";
import { motion } from "framer-motion";
import "./App.css";

function SetTimer() {
  const { timer } = useContext(TimerContext);
  const [minutes, setMinutes] = useState(10);
  const navigate = useNavigate();

  const handleDecrement = () => {
    setMinutes((prevMinutes) => Math.max(prevMinutes - 1, 1));
  };

  const handleIncrement = () => {
    setMinutes((prevMinutes) => prevMinutes + 1);
  };

  const handleClick = () => {
    timer.start({ countdown: true, startValues: { minutes } });

    navigate("/analog-timer");
  };

  return (
    <div className="App">
      <Navigation />
      <main className="timer">
        <div className="timer-wrapper">
          <div className="timer-container">
            <button className="timer-decrement" onClick={handleDecrement}>
              &lt;
            </button>
            <div className="timer-input"> {minutes} </div>
            <button className="timer-increment" onClick={handleIncrement}>
              &gt;
            </button>
          </div>
          <p className="timer-text">minutes</p>
        </div>
        <motion.button
          className="timer-startButton"
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          START TIMER
        </motion.button>
      </main>
    </div>
  );
}

export default SetTimer;
