import '../styles/App.css';
import Home from './home';

function App() {
  const x = new Date().getHours();
  return (
    <>
      <div className="App">
      <Home/>
        <h1>Esto es lo primero que creo.</h1>
      </div>
      <div>
        <h1>{x < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}</h1>
      </div>
    </>
  );
}

export default App;
