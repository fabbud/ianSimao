import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

function NavBar() {
  const [key, setKey] = useState('ian');

  return (
    <Navbar className="navbar-size navbar-custom" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto navbar-links"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Nav.Link
            as={Link}
            to="/"
            id="logo"
          >
            IAN<span className="simao">SIMÃO</span>
          </Nav.Link>
          <Navbar.Brand 
            href="https://www.instagram.com/como.desaparecer/"
            target="_blank"
            rel="noopener noreferrer"  
          >
            <FontAwesomeIcon
                className="instagram-navbar"
                icon={['fab', 'instagram']}
            />
            <img
              className="insta-navbar"
              src={require('../assets/insta.png')}
              alt="instagram logo"
            />
          </Navbar.Brand>
          <Nav.Link
            eventKey="livro"
            as={Link}
            to="/"
            id={key === 'livro' ? 'active-key' : ''}
          >
            Como Desaparecer Completamente
          </Nav.Link>
          <Nav.Link
            eventKey="desenhos"
            as={Link}
            to="/desenhos"
            id={key === 'desenhos' ? 'active-key' : ''}
          >
            Desenhos
          </Nav.Link>
          <Nav.Link
            eventKey="escritas"
            as={Link}
            to="/Escritas"
            id={key === 'escritas' ? 'active-key' : ''}
          >
            Escritas
          </Nav.Link>
          <Nav.Link
            eventKey="bio"
            as={Link}
            to="/bio"
            id={key === 'bio' ? 'active-key' : ''}
          >
            Bio
          </Nav.Link>
          {/* <Nav.Link
            eventKey="posts"
            as={Link}
            to="/publicacoes"
            id={key === 'posts' ? 'active-key' : ''}
          >
            Publicações
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
