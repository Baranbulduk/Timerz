import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MenuLogo from "../../assets/menu.png";
import "../Navigation/Navigation.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: {
      y: "-100%",
      transition: {
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <header className="nav">
      <img className="navbar__icon" onClick={toggleMenu} src={MenuLogo} />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <img className="menu__icon" onClick={toggleMenu} src={MenuLogo} />
            <motion.ul
              className="menu__list"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={itemVariants}>
                <Link to="/analog-timer" onClick={toggleMenu}>
                  ANALOG TIMER
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to="/digital-timer" onClick={toggleMenu}>
                  DIGITAL TIMER
                </Link>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navigation;
