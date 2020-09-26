import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DetallePlato from './detallePlatoComponent';

class Menu extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      platoElegido: null
    }
  }

  platoSeleccionado(plato) {
    this.setState({ platoElegido: plato })
  }

  render() {
    
    const menu = this.props.platos.map((plato) => {
      return (
        <div key={plato.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.platoSeleccionado(plato)}>
            <CardImg width="100%" src={plato.image} alt={plato.name} />
            <CardImgOverlay>
              <CardTitle>{plato.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
       );
    });

    return(
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          <DetallePlato plato={this.state.platoElegido} />
        </div>
      </div>
    );
  }
}

export default Menu;