//Ojo, al ser un componente la función debe llevar el nombre en mayúsculas.

// En este componente podemos observar dos props que entran dentro de la función
// y que serán invocados desde el fichero App.js

function Input ({text, placeholder}) {
  return (
    <div>
      <label htmlFor={text}>{text}</label>
      <input type="text" placeholder={placeholder} id={text}/>
    </div>

  )
}

export default Input