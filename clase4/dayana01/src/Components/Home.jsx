import { Link } from "react-router-dom";
import data from "../Data/product.json";

const Home = () => {
  const productLi = data.items.map((product, index) => {
    return (
      <li key={index}>
        <Link to={`product/${product.id}`}>
        <img src={product.imageUrl} alt="" />
        <h3>{product.name}</h3>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <img
        src="https://th.bing.com/th/id/R.f808858455f2e36fb72dd122a94c29e7?rik=ceYfb9LyJWkl3w&riu=http%3a%2f%2ficons.iconseeker.com%2fpng%2ffullsize%2fchakram-2%2fhome-74.png&ehk=SiGfJlXTQHyFQ%2fytOXBijQ71OqWNCew9AXH11X6uXp8%3d&risl=&pid=ImgRaw&r=0"
        alt="Imagen home"
      />
      <ul>{productLi}</ul>
    </div>
  );
};

export default Home;
