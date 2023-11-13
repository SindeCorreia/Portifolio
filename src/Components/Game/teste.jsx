import React, { useState } from 'react';

function Teste() {
  const [showRedPage, setShowRedPage] = useState(false);

  const openRedPage = () => {
    setShowRedPage(true);
  };

  return (
    <div>
      <button onClick={openRedPage}>Abrir Página Vermelha</button>
      {showRedPage && <div style={{ backgroundColor: 'red', width: '500px', height: '500px' }}></div>}
    </div>
  );
}

export default Teste;