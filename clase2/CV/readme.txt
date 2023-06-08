1º Se crea la carpeta de services. Lugar donde guardamos el archivo json
que es la fuente de la información. Esta carpeta TIENE QUE ESTAR DENTRO DENTRO
SRC.

Un archivo json no requiere de tener una declaración de variable ni nada. Es un 
array con el conjunto de claves:valor que caracterizan a cada objeto.

El objetivo de la aplicación es mostrar todos los datos de las tarjetas.
Las variables de estado van a estar en el fichero App.jsx. Luego se distribuyen por donde
se vayan a utilizar. En App.jsx también va a ser
donde se carguen los datos que alimenten la aplicación.

2º Antes de crear componentes. Introducidos en una carpeta llamada services (dentro de src)
los datos en formato JSON que se van a utilizar.


3º Como el objetivo es mostrar todos los estados primero generamos la lista donde estarán
todos contenidos ListCountry. Se incia el componente con una estructura básica:

function ListCountry(){
    return (
        <div>
            <h2>LISTADO DE PAÍSES</h2>
            <ul></ul>
        </div>
    )
}

export default ListCountry

Vamos a App.jsx y incluimos la importación y lo metemos dentro de la estructura:
import './App.css'
import data from "./services/ejemplo.json"
import ListCountry from '../components/ListCountry/ListCountry';


function App() {
 
  console.log(data);
  
  return (
  <div className='App'>
    <ListCountry />

  </div>
    
  )
}

export default App
En este punto se nos genera un ya el título que teníamos en ListCountry.

4º Generamos la primera variable de estado para cambiar los paises que se muestran. 

5º Enviamos por las prop las propiedades desde App hacia ListCountry.

Al recibirlo en ListCountry lo ponemos entre llaves para desestructurarlo y usar las propiedades
dentro de él.
