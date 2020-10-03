import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {

  render() {

    return(
      <>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron fluid>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-12">
                <h2 className="text-left">Ristorante Con Fusion</h2>
                <p className="text-left">Nos inspiramos en los platos más sabrosos de la comida rapida.
                <br/>
                Nuestras deliciosas creaciones harán vibrar tu sentido del gusto.</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );

  }

}

export default Header;
