import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menuComponent.js';
import './App.css';
import { PLATOS } from './shared/platos'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      platos: PLATOS
    };
  }

  render(){
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-dark">
          <div className="containerr">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </nav>
  
        <Menu platos={this.state.platos} />
      </div>
    );
  }

}

export default App;
