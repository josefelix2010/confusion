import React from 'react';
import { ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPlato({plato}) {
  console.log(plato);
  if(plato != null) {
    return(
      <Card>
        <CardImg top src={plato.image} alt={plato.name} />
        <CardBody>
          <CardTitle>{plato.name}</CardTitle>
          <CardText>{plato.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return(
      <div></div>
    );
  }

}

function RenderComments({comments}) {

  if(comments != null) {
    return(
      comments.map((comment) => {
        return(
          <li key={comment.id} className="list-group-item">
            <ListGroup>
              <ListGroupItem className="listGroupItemBorderless">
                <div className="row">
                  <div className="col-12 col-md-6 text-left">Autor: {comment.autor}</div>
                  <div className="col-12 col-md-6 text-right">Día: {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.fecha)))}</div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="text-left listGroupItemBorderless">Valoración: {comment.rate}/5</ListGroupItem>
              <ListGroupItem className="text-left listGroupItemBorderless">Comentario: {comment.comment}</ListGroupItem>
            </ListGroup>
          </li>
        )
      })
    )
  } else {
    return(
      <li></li>
    )
  }
  
}

const DetallePlato = (props) => {
  
  if(props.plato != null) {
    return(
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <Breadcrumb >
              <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/menu">Menú</Link></BreadcrumbItem>
              <BreadcrumbItem active>{ props.plato.name }</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-2">
            <RenderPlato plato={props.plato} />
          </div>
          <div className="col-12 col-md-5 m-2">
            <h3 className="text-center">Comentarios</h3>
            <ul className="list-group list-group-flush">
              <RenderComments comments={props.comments} />
            </ul>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }

}

export default DetallePlato;
