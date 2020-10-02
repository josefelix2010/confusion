import React, { Component } from 'react';
import { NavbarBrand } from 'reactstrap';
import Menu from './menuComponent.js';
import DetallePlato from './dishDetailComponent';
import { PLATOS } from '../shared/platos';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      platos: PLATOS,
      platoElegido: null
    };
  }

  platoSeleccionado(idPlato) {
    this.setState({ platoElegido: idPlato })
  }

  render(){
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </nav>
  
        <Menu platos={this.state.platos} 
          onClick={(idPlato) => this.platoSeleccionado(idPlato)} />
        <DetallePlato plato={this.state.platos.filter((plato) => plato.id === this.state.platoElegido)[0]} />
      </div>
    );
  }

}

export default Main;
