import React, { useEffect, useState } from 'react';
import CityInput from './components/CityInput';
import CurrentLocation from './components/CurrentLocation';
import LocationSwitch from './components/LocationSwitch';
import News from './components/News';
import Categories from './components/Categories';

import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showLocal, setShowLocal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [cities, setCities] = useState([]);
  const [category, setCategory] = useState(null);
  const [dots, setDots] = useState("");


  useEffect(() => {
    document.title = 'News Delivery App';

    const checkArticles = async () => {
      try {
        // const response = await fetch('http://98.85.16.27:8080/api/check-for-articles');
        const response = await fetch('http://localhost:8080/api/check-for-articles');
        const data = await response.json();
        if (data.ready) {
          fetchCticies();
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    checkArticles();
    const checkInterval = setInterval(checkArticles, 15000);

    return () => clearInterval(checkInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setDots((prevDots) => {
            if (prevDots.length < 3) {
                return prevDots + ".";
            } else {
                return "";
            }
        });
    }, 500);

    return () => clearInterval(interval);
}, []);

  const fetchCticies = () => {
    // fetch('http://98.85.16.27:8080/api/get-cities')
    fetch('http://localhost:8080/api/get-cities')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error("Error fetching cities:", error));
  };

  const sendCityToBackend = (city) => {
    // fetch('http://98.85.16.27:8080/api/get-articles', {
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
    <div className="app">
      <header className="app-header">
        <CurrentLocation selectedCity={selectedCity} />
        {cities.length > 0 ? (
          <CityInput cities={cities} onCitySelect={handleCitySelect} />
        ) : (
          <div></div>
        )}
        <LocationSwitch setShowLocal={setShowLocal} />
      </header>
      <div className="app-container">
        <Categories category={category} setCategory={setCategory}/>
        {
          cities.length > 0 ? (
            <News selectedCity={selectedCity} showLocal={showLocal} articles={articles} category={category} />
          ) : (
              <div className='loading-app'>Loading articles{dots}</div>
          )
        }

      </div>
    </div>
  );
}

export default App;
