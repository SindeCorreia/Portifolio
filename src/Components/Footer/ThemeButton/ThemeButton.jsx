import React, { useState } from 'react';
import "./ThemeButton.css"; // Certifique-se de ter um arquivo CSS para estilizar o switch

const Themebutton = () => {
  const [temaClaro, setTemaClaro] = useState(true);

  const toggleTema = () => {
    setTemaClaro((prevTemaClaro) => !prevTemaClaro);
  };

  return (
    <div className={temaClaro ? 'app claro' : 'app escuro'}>
      <label className="switch">
        <input type="checkbox" onChange={toggleTema} />
        <span className="slider round"></span>
      </label>
      {/* Restante do conteúdo da sua aplicação */}
    </div>
  );
};

export default Themebutton;

