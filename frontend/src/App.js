import React, { useEffect, useState } from 'react';
import CityInput from './components/CityInput';
import CurrentLocation from './components/CurrentLocation';
import LocationSwitch from './components/LocationSwitch';

import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    document.title = 'News Delivery App';
  }, [])
  
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    sendCityToBackend(city);
  };

  const sendCityToBackend = (city) => {
    fetch('http://localhost:8080/api/get-articles', {
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
        <CurrentLocation />
        <CityInput onCitySelect={handleCitySelect} />
        <LocationSwitch />
      </header>
      <div className="app">
        {selectedCity && (
          <div>
            <div className='news-container'></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
