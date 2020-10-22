import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="flex-homepage">
      <div className="div-img">
        <img
          className="capa-livro"
          src={require('../assets/livro.png')}
          alt="capa do livro"
        />
      </div>
      <div className="div-text">
        <h1 className="titulo-livro">Como Desaparecer Completamente</h1>
        <p className="desc-livro">
        Términos, recomeços e ressignificações. Oscilando entre o cérebro e o coração, as poesias representam a difícil tentativa de encontrar um equilíbrio. É fácil perceber os altos e baixos, já que o livro funciona como uma linha do tempo. Esse livro tem como objetivo criar uma conexão com todos que tem dificuldade em externar seus sentimentos, o abraço por finalmente serem representadas e o alívio por ver seus sentimentos registrados em uma obra. Afinal, só gostamos de poesias que nós mesmos escreveríamos.
        </p>
        <button className="compre">Compre do Autor</button>
        <p className="texto-plataformas">Também disponível nas lojas:</p>
        <div className="plataformas">
          <a href="https://www.americanas.com.br/produto/2207351334?pfm_carac=como-desaparecer&pfm_index=5&pfm_page=search&pfm_pos=grid&pfm_type=search_page" target="_blank" rel="noopener noreferrer">
            <img
            className="americanas"
            src={require('../assets/americanas.png')}
            alt="logo das lojas americanas"
            />
          </a>
          <a href="https://www.shoptime.com.br/produto/2207351334/como-desaparecer-completamente?pfm_carac=como%20desaparecer&pfm_index=3&pfm_page=search&pfm_pos=grid&pfm_type=search_page" target="_blank" rel="noopener noreferrer">
            <img
            className="shoptime"
            src={require('../assets/shoptime.png')}
            alt="logo do shoptime"
            />
          </a>
          <a href="https://www.amazon.com.br/COMO-DESAPARECER-COMPLETAMENTE-Ian-Sim%C3%A3o/dp/6586924383/ref=sr_1_9?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=5BNSKOURY4SC&dchild=1&keywords=como+desaparecer+completamente&qid=1603355237&sprefix=como+desaparecer%2Caps%2C484&sr=8-9" target="_blank" rel="noopener noreferrer">
            <img
            className="amazon"
            src={require('../assets/amazon.png')}
            alt="logo da amazon"
            />
          </a>
          <a href="https://www.submarino.com.br/produto/2207351334/como-desaparecer-completamente?pfm_carac=como%20desaparecer&pfm_index=3&pfm_page=search&pfm_pos=grid&pfm_type=search_page" target="_blank" rel="noopener noreferrer">
            <img
            className="submarino"
            src={require('../assets/sub.png')}
            alt="logo do submarino"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
