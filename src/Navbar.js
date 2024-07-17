import React from "react";
import { motion } from "framer-motion";
import Resume from './Resume.pdf';
import './Navbar.css';

function Navbar() {
  const [mode, setMode] = React.useState('light');

  const changeMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  React.useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#1F2833';
      document.body.style.color = '#56B4BE';
    } else {
      document.body.style.backgroundColor = '#1F2833';
      document.body.style.color = '#56B4BE';
    }
  }, [mode]);

  const viewResume = () => {
    window.open(Resume);
  };

  return (
    <nav className="navbar">
      <motion.h6
        className="nav-brand"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        Welcome to my Portfolio
      </motion.h6>
      <div className="nav-items">
        <motion.button
          type="button"
          onClick={viewResume}
          className="btn resumebtn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
