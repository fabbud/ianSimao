import React from 'react';
import './Bio.css';

function Bio() {
  return (
    <div className="bio-div">
      <div className="sobre-ian">
        <p>IAN SIMÃO, 23 anos e graduando em pedagogia. Começou escrever cedo, mas sempre escreveu apenas para si. Escondia páginas e páginas em suas gavetas. Quando percebeu que sua escrita poderia ajudar quem lia, começou a se abrir para tentar mostrar um pouquinho de seu próprio mundo para provar que afinal, ninguém está realmente sozinho. Sua escrita é como ler a palma da mão, faz olhar para si, mas um 'eu' mais recluso dentro de nós. Aquele que dói mas também dá colo. Ele sente sem medo.</p>
      </div>
      <div className="div-foto">
        <img
          className="ian"
          src={require('../assets/ian.jpg')}
          alt="foto do Ian"
        />
      </div>
    </div>
  );
}

export default Bio;
