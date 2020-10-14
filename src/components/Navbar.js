import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  const [key, setKey] = useState('');

  return (
    <Navbar bg="dark" className="navbar-size" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto navbar-links"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
