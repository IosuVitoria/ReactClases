import { useState } from "react";


const Contador = () =>{
    //let resultado = 0;

    const [resultado, setResultado] = useState(0)

    /*const contador = () => {
        console.log(resultado);
        setResultado(resultado+1)
        console.log(resultado)
    }

    const contadorResta = () => {
        console.log(resultado);
        setResultado(resultado-1)
        console.log(resultado)
    }*/

//Usamos los contenidos del botón para determinar la operación.

    const contador = (ev) =>{
        if(ev.target.innerText === "+"){
            setResultado(resultado+1);
        }else{
            setResultado(resultado-1);
        }
    }

    return (
        <div>
            <button onClick={contador}>+</button>
            <h2> {resultado}</h2>
            <button onClick={contador}>-</button>
        </div>
    )
}

export default Contador