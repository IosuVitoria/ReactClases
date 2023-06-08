import Buscador from '../buscador/Buscador.jsx'
import { useState } from 'react';

const Gallery = ({array}) => {
    console.log(array);

    const [filtro, setFiltro] =useState("")

    const arrayFiltrar = array.filter((elemento) => elemento.name.toLowerCase().includes(filtro))

    return (
    <div>
         <Buscador setFiltro = {setFiltro} />
        <ul>
        {arrayFiltrar.map((elemento, i)=>
        (
            <li key={i}>
                <h2>{elemento.name}</h2>
                <p>{elemento.price}</p>
                <p>{elemento.description}</p>
            </li>
        ))}

        </ul>
    </div>
  )
}

export default Gallery