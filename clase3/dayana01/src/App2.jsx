import { useState, useEffect } from 'react';
import './App.css';
import Limit from './components/Limit';
//Cambiado en main la referencia a App.jsx para hacer el ejercicio en su segunda parte.
//El cambio es que el usuario pueda definir las cantidades.

function App() {
  const [listPokemon, setListPokemon] = useState([]);
  const [count, setCount] = useState(10);
  //Se ha creado un input para determinar el número.
   

   const handleCount = (userValue) => (
     setCount(userValue)
   );
 
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=200`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setListPokemon(data.results);
      });
  }, [count]);

  const mapPokemons = () => {
    return listPokemon.map((pokemon, i) => (
      <li key={i}>
        {pokemon.name}
        <img src={pokemon.url} alt="pokemon" />
      </li>
    ));
  };

 
  return (
    <div className="App">
      <Limit handleCount={handleCount}/>
      <ul>{mapPokemons()}</ul>
    </div>
  );
}

export default App;
