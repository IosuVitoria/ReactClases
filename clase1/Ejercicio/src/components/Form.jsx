import Input from "./Inputs.jsx"
import Button from "./Button.jsx"

function Form() {
    
    return(
        <form action="">
            <Input text="nombre" placeholder="Ej. Iosu Gómez"/>
            <Input text="email" placeholder="Ej. example@email.com"/>
            <Button ></Button>
        </form>
    )
}

export default Form;