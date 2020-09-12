import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      platos: [
        {
          id: 0,
          name: 'Pizzeta',
          image: 'assets/images/pizzeta.png',
          categoty: 'entrada',
          label: 'Caliente',
          price: '2,49',
          description: 'Nuestra deliciosa pizzeta de queso y nuez.'
        },
        {
          id: 1,
          name: 'Hamburguesa',
          image: 'assets/images/hamburguesa.png',
          categoty: 'principal',
          label: 'Caliente',
          price: '4,49',
          description: 'Rica hamburguesa con el mejor pan y carne de primera.'
        },
        {
          id: 2,
          name: 'Cheesecake',
          image: 'assets/images/cheesecake.png',
          categoty: 'postre',
          label: 'Frío',
          price: '3,19',
          description: 'El mejor postre con los ingredientes más frescos.'
        }
      ]
    }
  }

  render() {
    
    const menu = this.state.platos.map((plato) => {
      return (
        <div key={plato.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={plato.image} alt={plato.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{plato.name}</Media>
              <p>{plato.description}</p>
            </Media>
          </Media>
        </div>
       );
    });

    return(
      <div className="container">
        <div className="row">
          <Media list>
            {menu};
          </Media>
        </div>
      </div>
    );
  }
}

export default Menu;