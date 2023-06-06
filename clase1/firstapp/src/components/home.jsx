import Boton from "./Button"

function Home(children){

    return (
        <>
            <h2>Este el Home</h2>
            <Boton estilo ="rojo" texto="Registrar usuario" />

            {children}
        </>
    )
}   

export default Home;

