import React, {useEffect, useState} from 'react';
import './LocationSwitch.css';

function LocationSwitch() {

    return (
        <div className="toggle-switch">
          <span>A</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>B</span>
        </div>
      );
    };

export default LocationSwitch