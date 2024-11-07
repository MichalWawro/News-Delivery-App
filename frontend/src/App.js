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
    fetch('http://localhost:8080/api/select-city', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(city),
    })
    .then(response => response.json())
    .then(data => {
        console.log('City sent to backend:', data);
    })
    .catch(error => console.error('Error:', error));
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
