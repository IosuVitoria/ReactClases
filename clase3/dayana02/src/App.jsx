import { useEffect } from 'react';
import './App.css';
import axios from "axios";
import { useState } from 'react';
import Characters from './components/Characters';
import CharacterFilter from './components/CharacterFilter';

function App() {
  const [listCharacters, setListCharacters] = useState([]);
  const [house, setHouse] = useState('gryffindor');
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const url = `https://hp-api.onrender.com/api/characters/house/${house}`;

  const handleSelect = (event) => {
    setHouse(event.target.value);
  };

  useEffect(() => {
    axios.get(url).then(
      (resp) => {
        setListCharacters(resp.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [house]);

  const addNewFavorite = (newFav) => {
    setFavorites([...favorites, newFav]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = listCharacters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h2>Listado de personajes</h2>
      <div id="Filters">
        <select name="" id="Housefilter" onChange={handleSelect}>
          <option value="gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Slytherin">Slytherin</option>
        </select>
        <CharacterFilter id="Namefilter" searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <main>
        <Characters list={filteredCharacters} addNewFavorite={addNewFavorite} />
      </main>
    </div>
  );
}

export default App;
