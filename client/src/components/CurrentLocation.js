import React from 'react';
import './CurrentLocation.css';

function CurrentLocation({ selectedCity }) {

    return (
        <div>
            {selectedCity ? (
                <div className='current-location-box'>
                    <h1>{selectedCity.name}, {selectedCity.state}</h1>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default CurrentLocation