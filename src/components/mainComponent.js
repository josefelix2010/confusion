import React, { Component } from 'react';
import Footer from './footerComponent';
import Header from './headerComponent';
import Home from './homeComponent';
import Menu from './menuComponent.js';
import { PLATOS } from '../shared/platos';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      platos: PLATOS,
      platoElegido: null
    };
  }

  render(){

    const HomePage = () => {
      return(
        <Home />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu platos={this.state.platos} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;
