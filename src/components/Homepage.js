import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="flex-homepage">
      <h1 className="titulo-livro">Como Desaparecer Completamente</h1>
      <img
        className="capa-livro"
        src={require('../assets/capa_livro.png')}
        alt="capa do livro"
      />
    </div>
  );
}

export default Homepage;
