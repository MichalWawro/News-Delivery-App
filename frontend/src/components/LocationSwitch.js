import React from 'react';
import './LocationSwitch.css';

import localIcon from '../resources/local-icon.png'
import globalIcon from '../resources/global-icon.png'

function LocationSwitch({ setShowLocal }) {

  const handleToggle = (event) => {
    console.log("It tickles!")
    setShowLocal(event.target.checked);
  };

  return (
    <div className="toggle-switch">
      <img src={localIcon} alt={"Local"} className='switch-icon local-icon' />
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <img src={globalIcon} alt="Global" className='switch-icon global-icon' />
    </div>
  );
};

export default LocationSwitch