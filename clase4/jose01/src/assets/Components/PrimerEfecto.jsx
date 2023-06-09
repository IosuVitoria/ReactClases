import { useEffect, useState } from 'react';

const PrimerEfecto = () => {
  const [nombre, setNombre] = useState("Manuel");

  useEffect(() => {
    setNombre("Pedro");
  }, []);

  return (
    <div>
      <h2>PrimerEfecto</h2>
      {nombre}
    </div>
  );
}

export default PrimerEfecto;
