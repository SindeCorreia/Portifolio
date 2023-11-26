import React from 'react';
import { useLocation } from 'react-router-dom';

 function Simon () {
  const location = useLocation();

  return (
    <div>
        <p>as</p>
        <p>as</p>
        <p>as</p>
        <p>as</p>
        <p>as</p>
        <p>as</p>
        <p>as</p>
        <p>as</p>
        <p>as</p>
        <p>as</p>
        <p>as</p>
      <h1>Rota Atual: {location.pathname}</h1>
    </div>
  )
}

export default Simon;
