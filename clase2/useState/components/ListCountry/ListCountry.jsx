import Country from "../Country/Country";

function ListCountry({ countries }) {
  const renderCountries = () => {
    return countries.map((country) => (
      <li key={country.name}>
        <Country
          name={country.name}
          capital={country.capital}
          population={country.population}
          continent={country.continent}
        />
      </li>
    ));
  };

  return (
    <div>
      <h2>LISTADO DE PAÍSES</h2>
      <ul>{renderCountries()}</ul>
    </div>
  );
}

export default ListCountry;
