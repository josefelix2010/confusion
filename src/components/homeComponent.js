import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({item}) {
  return(
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
        <CardText className="text-left">{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {

  return(
    <div className="container mt-5 mb-5">
      <div className="row align-items-start">
        <div className="col col-12 col-md m-1">
          <RenderCard item={props.plato} />
        </div>
        <div className="col col-12 col-md m-1">
          <RenderCard item={props.promo} />
        </div>
        <div className="col col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  )

}

export default Home;
