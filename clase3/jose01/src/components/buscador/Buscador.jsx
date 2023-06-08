const Buscador = ({setFiltro}) => {
  console.log(setFiltro);

  const obtenerValor = (ev) =>{
    setFiltro(ev.target.value.toLowerCase());
  }

  return (
    <>
        <input type="text" onInput={obtenerValor} />
    </>
  )
}

export default Buscador