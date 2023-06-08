import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=200")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setListPokemon(data.results);
      });
  }, []);

  const mapPokemons = () => {
    return listPokemon.map((pokemon, i) => <li key={i}>{pokemon.name}</li>);
  };

  return (
    <div className="App">
      <ul>{mapPokemons()}</ul>
    </div>
  );
}

export default App;
