import OneCharacter from "./OneCharacter";

const Characters = ({list, setFavourites,favourites}) => {
  // Mapear la lista de elementos y crear un componente `OneCharacter` para cada elemento
  
  const handleClick = (event) => {
    //Target hace referencia al elemento clicado.
    //currentTarget hace referencia al elemento escuchado.
    //Si tenemos un li con una imagen. Tu puedes clicar sobre una imagen pero escuchas sobre todo el elemento li que contiene a imagen.
    const id = event.currentTarget.id;
    const findCharacter = list.find((item) => {
        console.log(findCharacter)
        return item.id === id;
        
    })
  }

  setFavourites([...favourites, findCharacter])
  // Guardar findCharacter => array de favoritos.

  //La varaible (el array de favoritos) en la que guardamos debe ser una variable de estado  que se renderice continuamente.
  
  const listCharacters = list.map((item, index) => {
    return (
      <li key={index} onClick={handleClick} id ={item.id}>
        <OneCharacter item={item} />
      </li>
    );
  });

  return (
    <>
      <h2>LISTADO DE PERSONAJES</h2>
      <ul>
        {/* Renderizar los componentes `OneCharacter` */}
        {listCharacters}
      </ul>
    </>
  );
};

export default Characters;
