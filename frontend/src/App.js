import './App.css';

function App() {

  fetch("http://localhost:8080/api/news")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data: ", error))

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
