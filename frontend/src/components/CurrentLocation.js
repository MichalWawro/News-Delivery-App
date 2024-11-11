import React from 'react';
import './CurrentLocation.css';

function CurrentLocation({selectedCity}) {

    return (
        <div className='current-location-box'>
            {selectedCity ? (
                <h1>{selectedCity.name}, {selectedCity.state}</h1>
            ) : (
                <h1>Select a Location</h1>
            )}
        </div>
    );
}

export default CurrentLocation