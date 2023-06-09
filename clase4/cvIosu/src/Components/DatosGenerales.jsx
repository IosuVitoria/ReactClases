import React from 'react';

const DatosGenerales = ({ nombre, apellido, carrera, intereses, pasion }) => {
  return (
    <div>
      <h1>Datos Generales</h1>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Carrera: {carrera}</p>
      <p>Intereses: {intereses}</p>
      <p>Pasión: {pasion}</p>
    </div>
  );
}

export default DatosGenerales;
