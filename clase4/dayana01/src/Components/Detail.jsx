import { useParams } from 'react-router-dom';
import data from '../Data/product.json';

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  const findProduct = data.items.find((product) => product.id === id);

  if (!findProduct) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalle del producto</h2>
      <img src={findProduct.imageUrl} alt="" />
      <h3>{findProduct.name}</h3>
      <h3>{findProduct.price}</h3>
      <ul>
        {findProduct.sizes.map((size) => (
          <li key={size}>{size}</li>
        ))}
      </ul>
      <p>{findProduct.description}</p>
    </div>
  );
};

export default Detail;
