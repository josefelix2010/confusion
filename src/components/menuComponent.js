import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({plato, onClick}) {
  
  return(
    <Card key={plato.id}>
      <Link to={`/menu/${plato.id}`}>
        <CardImg width="100%" src={plato.image} alt={plato.name} />
        <CardImgOverlay className="cardImgOpaca">
          <CardTitle style={{margin: "1px", color: "#FFFFFF"}}>{plato.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );

}

const Menu = (props) => {
  
  const menu = props.platos.map((plato) => {
    return(
      <div key={plato.id} className="col-12 col-md-6 mt-3 mb-3">
        <RenderMenuItem plato={plato} />
      </div>
    )
  });

  return(
    <div className="container">
      <div className="row mb-3">
        <div className="col-12">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menú</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  )

}

export default Menu;