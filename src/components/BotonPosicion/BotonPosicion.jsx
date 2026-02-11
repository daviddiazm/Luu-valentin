import React, { useEffect, useRef } from 'react';

const BotonPosicion = ({ sendPos }) => {
  const botonRef = useRef(null); // Usar useRef para crear una referencia al elemento del botón

  const obtenerPosicion = () => {
    const boton = botonRef.current;
    if (boton) {
      const { x, y } = boton.getBoundingClientRect();
      sendPos(x, y);
    }
  };
  useEffect(() => {
    obtenerPosicion(); // Llama a obtenerPosicion() una vez que el componente ha sido montado en el DOM
  }, []); // El segundo argumento [] asegura que el efecto solo se ejecute una vez, equivalente a componentDidMount

  return (
    <button ref={botonRef} onClick={obtenerPosicion}>
      Si
    </button>
  );
};

export default BotonPosicion;
