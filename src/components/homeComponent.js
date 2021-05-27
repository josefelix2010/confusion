import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './loadingComponent.js';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({item, isLoading, errMess}) {
  if(isLoading) {
    return(
      <Loading />
    )
  } else if(errMess) {
    return(
      <h4>{errMess}</h4>
    )
  } else {
    console.log("URL: ", baseUrl + item.image)
    return(
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText className="text-left">{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

function Home(props) {

  return(
    <div className="container mt-5 mb-5">
      <div className="row align-items-start">
        <div className="col col-12 col-md m-1">
          <RenderCard item={props.plato} 
            isLoading={props.dishesLoading} 
            errMess={props.dishesErrMess} />
        </div>
        <div className="col col-12 col-md m-1">
          <RenderCard item={props.promo} 
            isLoading={props.promosLoading} 
            errMess={props.promosErrMess}/>
        </div>
        <div className="col col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  )

}

export default Home;
