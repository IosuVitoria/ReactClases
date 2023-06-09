import './App.css';
import { CV } from './MyCV/CV';
import mifoto from './assets/mifoto.jpg'; // Asegúrate de especificar la extensión del archivo

const { DatosGenerales } = CV;
console.log(DatosGenerales);

function App() {
  return (
    <div className="App">
      {/* Aquí puedes usar los datos de DatosGenerales */}
      <h1 className="heading">{DatosGenerales.nombre} {DatosGenerales.apellido}</h1>
      <img className="profile-image" src={mifoto} alt="Mi Foto" />
      <p>Carrera: {DatosGenerales.carrera}</p>
      <p>Intereses: {DatosGenerales.intereses}</p>
      <p>Pasión: {DatosGenerales.pasión}</p>
    </div>
  );
}

export default App;
