import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TimerContext from "../../context/TimerContext";
import { motion } from "framer-motion";
import "../AbortButton/AbortButton.css";

function AbortButton() {
  const { timer } = useContext(TimerContext);
  const navigate = useNavigate();

  const handleAbort = () => {
    timer.stop();
    navigate("/set-timer");
  };

  return (
    <motion.button
      className="abort-timer"
      onClick={handleAbort}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      ABORT TIMER
    </motion.button>
  );
}

export default AbortButton;
