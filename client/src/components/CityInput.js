import React, { useState } from 'react';
import './CityInput.css';

function CityInput({ cities, onCitySelect }) {
    const [input, setInput] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        filterCities(e.target.value);
    }

    const filterCities = (inputText) => {
        if (inputText) {
            const filtered = cities.filter(city =>
                city.name.toLowerCase().includes(inputText.toLowerCase())
                // ||
                // (city.state && city.state.toLowerCase().includes(inputText.toLowerCase()))
            );
            setFilteredCities(filtered);
        } else {
            setFilteredCities([]);
        }
    };

    const handleCitySelect = (city) => {
        setInput('');
        setFilteredCities([]);
        onCitySelect(city);
    }

    return (
        <div className='city-input'>
            <input
                className="input-field"
                type="text"
                placeholder="Search for a city"
                value={input}
                onChange={handleInputChange}
            />
            {filteredCities.length > 0 && (
                <ul className="dropdown-list">
                    {filteredCities.map((city) => (
                        <li
                            key={`${city.name}-${city.state}`}
                            onClick={() => handleCitySelect(city)}
                        >
                            {city.name}, {city.state}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CityInput;
