import React from 'react';
import './ThemeSwitch.css';
import { useTheme } from '../ThemeContext';

import sunIconLight from '../resources/sun-icon-light.png';
import moonIconLight from '../resources/moon-icon-light.png';
import sunIconDark from '../resources/sun-icon-dark.png';
import moonIconDark from '../resources/moon-icon-dark.png';



function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleToggle = (event) => {
    setTheme(event.target.checked);
  };

  return (
    <div className="toggle-switch">
      <img
        src={theme ? sunIconDark : sunIconLight}
        alt="Light"
        className="switch-icon sun-icon"
      />
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} checked={theme} />
        <span className="slider"></span>
      </label>
      <img
        src={theme ? moonIconDark : moonIconLight}
        alt="Dark"
        className="switch-icon moon-icon"
      />
    </div>
  );
}

export default ThemeSwitch;
