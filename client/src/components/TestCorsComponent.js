import React, { useEffect, useState } from 'react';

const TestCorsComponent = () => {
  const [corsResponse, setCorsResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://98.85.16.27:8080/api/test-cors')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        setCorsResponse(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Testing CORS</h1>
      {corsResponse && <p>Response: {corsResponse}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};

export default TestCorsComponent;
