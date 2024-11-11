import React, { useEffect, useState } from 'react';
import CityInput from './components/CityInput';
import CurrentLocation from './components/CurrentLocation';
import LocationSwitch from './components/LocationSwitch';

import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLocal, setShowLocal] = useState(true);


  useEffect(() => {
    document.title = 'News Delivery App';

    //   const interval = setInterval(() => {
    //     fetch('http://localhost:8080/api/ping')
    //       .then(response => response.json())
    //       .then(data => {
    //         if (data.ready) {
    //           setLoading(false);
    //           clearInterval(interval);
    //         }
    //       })
    //       .catch(error => console.error('Error:', error));
    //   }, 10000);
    //   return () => clearInterval(interval);
  }, []);

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
        <CurrentLocation selectedCity={selectedCity} />
        <CityInput onCitySelect={handleCitySelect} />
        <LocationSwitch setShowLocal={setShowLocal} />
      </header>
      <div className="app">
        {loading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div>
            {selectedCity != null ? (
              <div>
                {showLocal ? (
                  <div className='global-news-container'>
                    Global
                  </div>
                ) : (
                  <div className='local-news-container'>
                    Local
                  </div>

                )}
              </div>
            ) : (
              <div className='select-city-wait'>Choose you current location to see the local news!</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
