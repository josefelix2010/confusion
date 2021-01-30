import React, { Component } from 'react';
import Footer from './footerComponent';
import Header from './headerComponent';
import Home from './homeComponent';
import AboutUs from './aboutUsComponent.js';
import Menu from './menuComponent.js';
import Contact from './contactComponent.js';
import DetallePlato from './dishDetailComponent.js';
import { PLATOS } from '../shared/platos';
import { LEADERS } from '../shared/leaders';
import { PROMOCIONES } from '../shared/promociones';
import { COMENTARIOS } from '../shared/comentarios';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      platos: PLATOS,
      leaders: LEADERS,
      promos: PROMOCIONES,
      comentarios: COMENTARIOS,
      platoElegido: null
    };
  }

  render(){

    const HomePage = () => {
      return(
        <Home plato={this.state.platos.filter((plato) => plato.feature)[0]}
          leader={this.state.leaders.filter((leader) => leader.feature)[0]}
          promo={this.state.promos.filter((promo) => promo.feature)[0]}
        />
      )
    }

    const PlatoConId = ({match}) => {
      return(
        <DetallePlato plato={this.state.platos.filter((plato) => plato.id === parseInt(match.params.idPlato, 10))[0]} 
          comments={this.state.comentarios.filter((comment) => comment.platoId === parseInt(match.params.idPlato, 10))}
        />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu platos={this.state.platos} />} />
          <Route path="/menu/:idPlato" component={PlatoConId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <AboutUs lideres={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;
