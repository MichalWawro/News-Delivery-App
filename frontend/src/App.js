import React, { useEffect, useState } from 'react';
import CityInput from './components/CityInput';
import CurrentLocation from './components/CurrentLocation';
import LocationSwitch from './components/LocationSwitch';
import News from './components/News';

import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLocal, setShowLocal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [cities, setCities] = useState([]);


  useEffect(() => {
    document.title = 'News Delivery App';

    const checkArticles = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/check-for-articles');
        const data = await response.json();
        if (data.ready) {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    checkArticles();
    const interval = setInterval(checkArticles, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/get-cities')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error("Error fetching cities:", error));
  }, [setArticles]);

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
        setArticles(data);
        console.log('City sent to backend:', data);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    sendCityToBackend(city);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <CurrentLocation selectedCity={selectedCity} />
        {cities.length > 0 ? (
          <CityInput cities={cities} onCitySelect={handleCitySelect} />
        ) : (
          <div className='loading'>Fetching data, please wait...</div>
        )}
        <LocationSwitch setShowLocal={setShowLocal} />
      </header>
      <div className="app">
        <News loading={loading} selectedCity={selectedCity} showLocal={showLocal} articles={articles} />
      </div>
    </div>
  );
}

export default App;
