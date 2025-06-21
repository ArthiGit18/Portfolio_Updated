import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu'; // Make sure this is installed
import CloseIcon from '@mui/icons-material/Close';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav_wrapper">
      <div className="container">
        <nav>
          <div className="nav_logo">
            <img src="../assets/Logo/A (1).png" alt="Logo" />
          </div>

          {/* ✅ Menu icon for mobile */}
          <div className="menu_icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </div>

          {/* ✅ Conditional class for menu */}
          <ul className={`nav_items ${isOpen ? 'open' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
