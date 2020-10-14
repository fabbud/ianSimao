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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          libero sapien, mattis eget purus vel, viverra suscipit dui. In vel
          vulputate mi. Vivamus auctor neque vitae ligula porttitor, sit amet
          tristique augue auctor. Ut vel tortor non velit dapibus ultricies.
          Nullam porta consectetur augue at sodales. Vivamus vel neque ac tortor
          finibus tempor. Suspendisse potenti. Proin convallis risus eget eros
          tempus, vel scelerisque orci sagittis. Nam accumsan neque a leo ornare
          pretium.
        </p>
        <button className="compre">Compre por R$30</button>
      </div>
    </div>
  );
}

export default Homepage;
