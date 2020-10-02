import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({plato, onClick}) {
  
  return(
    <Card key={plato.id} onClick={() => onClick(plato.id)}>
      <CardImg width="100%" src={plato.image} alt={plato.name} />
      <CardImgOverlay>
        <CardTitle>{plato.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );

}

const Menu = (props) => {
  
  const menu = props.platos.map((plato) => {
    return(
      <div key={plato.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem plato={plato} onClick={props.onClick} />
      </div>
    )
  });

  return(
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  )

}

export default Menu;