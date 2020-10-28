import React from 'react';
import './Escritas.css';

function Escritas() {
  return (
    <div className="escritas-div">
      <p className="emdesenvolvimento">EM DESENVOLVIMENTO...</p>
      <div className="escrita-card">
        <img
            className="livro"
            src={require('../assets/desenho_livro.png')}
            alt="desenho de um livro"
          />
      </div>
    </div>
  );
}

export default Escritas;
