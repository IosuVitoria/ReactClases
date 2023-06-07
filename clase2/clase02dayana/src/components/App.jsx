import  { useState } from 'react';

const App = () => {
  // Declaración de la variable de estado "mensaje" y 
  //su función para actualizarla "setMensaje"
  const [mensaje, setMensaje] = useState('');
  const [name, setNombre] = useState('');

  const handleInput = (event) =>{
    setNombre(event.target.value); //Esto permite seleccionar el valor del input.
  }

  // Función que se ejecuta cuando se hace clic en el botón
  const handleClick = (event) => {
    console.log("Me han clicado"); // Imprime un mensaje en la consola
    setMensaje(`El ${name} ha hecho click en el botón`); // Actualiza el estado "mensaje" con un nuevo valor
  };

  return (
    <div className='App'>

      <input type="text" onChange={handleInput}/>

      <button onClick={handleClick}>Haga Click</button>
      <p>{mensaje}</p>
    </div>
  );
};

export default App;
