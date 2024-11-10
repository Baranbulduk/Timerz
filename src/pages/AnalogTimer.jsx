import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation.jsx";
import AbortButton from "../components/AbortButton/AbortButton.jsx";
import TimerContext from "../context/TimerContext";
import "./App.css";

function AnalogTimer() {
  const { timer } = useContext(TimerContext);
  const [timeValues, setTimeValues] = useState(timer.getTimeValues());
  const navigate = useNavigate();

  const minuteRotation =
    (60 - timeValues.minutes - timeValues.seconds / 60) * 6;

  useEffect(() => {
    const updateTime = () => {
      setTimeValues(timer.getTimeValues());
    };

    timer.addEventListener("secondsUpdated", updateTime);
    timer.addEventListener("targetAchieved", handleTargetAchieved);

    return () => {
      timer.removeEventListener("secondsUpdated", updateTime);
      timer.removeEventListener("targetAchieved", handleTargetAchieved);
    };
  }, [timer, navigate]);

  const handleTargetAchieved = () => {
    navigate("/alarm");
  };

  return (
    <div className="App">
      <Navigation />
      <main className="analog">
        <div className="analog-timer">
          <motion.div
            className="hand"
            style={{ rotate: -minuteRotation }}
            animate={{ rotate: -minuteRotation }}
            transition={{
              ease: "linear",
            }}
          ></motion.div>
          <div className="center"></div>
        </div>
        <AbortButton />
      </main>
    </div>
  );
}

export default AnalogTimer;
