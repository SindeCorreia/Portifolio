import React, { useState } from 'react';

const ListaDeFrutas = () => {
  const frutas = ['Maçã', 'Banana', 'Uva', 'Morango', 'Abacaxi', 'Melancia', 'Laranja'];
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [resultados, setResultados] = useState([]);

  const handlePesquisa = (termo) => {
    const resultadosFiltrados = frutas.filter(fruta =>
      fruta.toLowerCase().includes(termo.toLowerCase())
    );
    setResultados(resultadosFiltrados);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar frutas..."
        value={termoPesquisa}
        onChange={(e) => {
          setTermoPesquisa(e.target.value);
          handlePesquisa(e.target.value);
        }}
      />
      <ul>
        {resultados.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeFrutas;