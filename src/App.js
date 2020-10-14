import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Homepage from './components/Homepage';
import Desenhos from './components/Desenhos';
import Bio from './components/Bio';
import Escritas from './components/Escritas';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/desenhos" component={Desenhos} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/escritas" component={Escritas} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;