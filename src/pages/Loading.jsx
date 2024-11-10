import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TimerLogo from "../assets/timer.png";
import "./App.css";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/set-timer");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="App">
      <motion.main className="loading">
        <img src={TimerLogo} alt="Logotyp" className="timerLogo" />
        <div className="logoText">
          <h1>T</h1>
          <h1>I</h1>
          <h1>M</h1>
          <h1>E</h1>
          <h1>R</h1>
          <h1 className="logoText-z">Z</h1>
        </div>
      </motion.main>
    </div>
  );
}

export default Loading;
