import React from 'react';
import './Desenhos.css';

function Desenhos() {
  return (
    <div className="desenho-div">
      <p className="emdesenvolvimento">EM DESENVOLVIMENTO...</p>
      <div className="desenho-card">
        <img
            className="porta"
            src={require('../assets/desenho_porta.png')}
            alt="desenho de uma porta"
          />
      </div>
    </div>
  );
}

export default Desenhos;
