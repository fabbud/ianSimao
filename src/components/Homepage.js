import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="flex-homepage">
      <div className="div-img">
        <img
          className="capa-livro"
          src={require('../assets/capa_livro.png')}
          alt="capa do livro"
        />
      </div>
      <div className="div-text">
        <h1 className="titulo-livro">Como Desaparecer Completamente</h1>
        <p className="desc-livro">
          Términos, recomeços e ressignificações. Oscilando entre o cérebro e o
          coração, as poesias representam a difícil tentativa de encontrar um
          equilíbrio. É fácil perceber os altos e baixos, já que o livro
          funciona como uma linha do tempo. A publicação do livro tem como
          objetivo criar uma conexão com todos que tem dificuldade em externar
          seus sentimentos, o abraço por finalmente serem representadas e o
          alívio por ver seus sentimentos registrados em uma obra. Afinal, só
          gostamos de poesias que nós mesmos escreveríamos.
        </p>
        <button className="compre">Compre por R$30</button>
      </div>
    </div>
  );
}

export default Homepage;
