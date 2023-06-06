import '../styles/App.css';
import Home from './home';
import Boton from './Button';

function App() {
  const x = new Date().getHours();
  return (
      <div className="App">
        <Home/>
        <h1>Esto es lo primero que creo.</h1>
        <h1>{x < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}</h1>
        <p>Lorem  ipsum.</p>

        <Boton estilo="azul" texto="reset" />
      </div>
  );
}

export default App;
