import React, {useEffect, useState} from 'react';
import CityInput from './components/CityInput';

import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    sendCityToBackend(city);
  };

  const sendCityToBackend = (city) => {
    console.log('city sent to backend:', city);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <CityInput onCitySelect={handleCitySelect}/>
      </header>
      <div className="app">
        {selectedCity && (
          <div>
            <p>Currently selected city: {selectedCity.name}, {selectedCity.state}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
