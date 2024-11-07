import './App.css';

function App() {

  fetch("http://localhost:8080/api/news")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data: ", error))

  return (
    <div className="app-container">
      <header className="app-header">
          <input className="input-field" placeholder="Select your location" />
      </header>
      <div className="app">
        <h1>Text</h1>
      </div>
    </div>
  );
}

export default App;
