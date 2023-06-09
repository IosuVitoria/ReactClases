import { useEffect } from "react";
import { useState } from "react";

const Tercerfecto = () => {
    const [estado, setEstado] = useState(0);

    useEffect(()=>{
        console.log("Soy un efecto cojonero")
    },[estado])
    // El useEffect escucha el cambio de estado del contador controlado por la variable estado
    // y imprime el mensaje soy un efecto cojonero.

    const sumar = () => {
        setEstado(estado+1)
    }

  return (
    <div>
        <h2>Tercer efecto</h2>
        <p>{estado}</p>
        <button onClick={sumar}>+</button>
    </div>
  )
}

export default Tercerfecto