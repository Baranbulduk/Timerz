import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AlarmLogo from "../assets/alarm.png";
import "./App.css";

function Alarm() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/set-timer");
  };

  return (
    <div className="App">
      <main className="alarm">
        <img className="alarmLogo" src={AlarmLogo} alt="Alarm Logo" />
        <h2 className="alarm-heading">Times up!</h2>
        <motion.button
          className="alarm-button"
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SET NEW TIMER
        </motion.button>
      </main>
    </div>
  );
}

export default Alarm;