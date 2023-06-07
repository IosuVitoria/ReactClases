import './ListProducts.css'
import Country from "../src/components/";
//Las propiedades se establecen entre los paréntesis, al meterlos entre las llaves {} lo desestructuramos
function ListProduct({ list }) {
	//Definimos la función que va a coger los datos contenidos en data(nosotros pasaremos la variable data en el archivo App.js como una propiedad de ListProduct) y los va a almacenar en un listado <li></li>
	const renderProducts = () => {
		return list.map((product) => 
		//La lectura sería: Por cada elemento <li> queremos que se forme un Product recogido en la función <Product />
		<li>
			<Product product = {product}/>
		</li>)
	}
  return(
		<div>
			<h2>Listado de Productos</h2>
			<ul>
				{/* Llamamos a la función para pintarlo en la web */}
				{renderProducts()}
			</ul>
		</div>
  )
}

export default ListProduct;







  //Se genera la primera variable de estado. Esta variable va a ser la que react
  //controle para saber que elementos muestra. Es decir irá cambiando en función de la
  //búsqueda que se haga.
  