const Contacto = () => {
  return (
    <div className="Form">
        <p>Este es el formulario de contacto</p>
        <form >
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name"/>

            <label htmlFor="email"> Email</label>
            <input type="text" id ="email"/>

            <input type="submit" />
        </form>
    </div>
  )
}

export default Contacto