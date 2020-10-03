import React, { Component } from 'react';
import Header from './headerComponent';
import Menu from './menuComponent.js';
import DetallePlato from './dishDetailComponent';
import Footer from './footerComponent';
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
        <Header />
  
        <Menu platos={this.state.platos} 
          onClick={(idPlato) => this.platoSeleccionado(idPlato)} />
        <DetallePlato plato={this.state.platos.filter((plato) => plato.id === this.state.platoElegido)[0]} />
        <Footer />
      </div>
    );
  }

}

export default Main;
