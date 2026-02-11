import React, { useState } from 'react';
import './BotonMovible.css'; // Archivo CSS donde definirás los estilos y la animación del botón

const BotonMovible = ({ nuevaPosX, nuevaPosY }) => {
  const [posicion, setPosicion] = useState({ x: nuevaPosX + 100, y: "auto" });

  const moverBoton = () => {
    // Genera una nueva posición aleatoria dentro del área visible de la ventana
    const nuevaPosX = Math.random() * (window.innerWidth - 100); // Ancho del botón
    const nuevaPosY = Math.random() * (window.innerHeight - 100); // Alto del botón
    setPosicion({ x: nuevaPosX, y: nuevaPosY });
  };

  return (
    <div
      className="boton-movible"
      style={{ left: posicion.x, top: posicion.y }}

      onMouseEnter={moverBoton}
      onClick={moverBoton}
    >
      No
    </div>
  );
};

export default BotonMovible;
