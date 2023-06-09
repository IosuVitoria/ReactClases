import { useEffect, useState } from 'react';

const SegundoEfecto = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      console.log("Funciona");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Segundo Efecto</h2>
      {!visible ? <img src="https://art.pixilart.com/3e22b4f925622dd.gif" alt="gif loading" /> : <p>Este es el contenido</p>}
    </div>
  );
}

export default SegundoEfecto;
