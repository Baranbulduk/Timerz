import Navigation from "../components/Navigation/Navigation.jsx";
import AbortButton from "../components/AbortButton/AbortButton.jsx";
import TimerContext from "../context/TimerContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function DigitalTimer() {
  const { timer } = useContext(TimerContext);
  const [timeValues, setTimeValues] = useState(timer.getTimeValues());
  const navigate = useNavigate();

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
      <main className="digital">
        <h2 className="digital-display">
          {timeValues.toString(["minutes", "seconds"])}
        </h2>
        <AbortButton />
      </main>
    </div>
  );
}

export default DigitalTimer;
