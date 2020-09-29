import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DetallePlato extends Component {
  render() {

    if(this.props.plato != null) {
      const comentario = this.props.plato.comments.map((comentario) => {
        return(
          <li key={comentario.id} className='list-group-item'>
            <ListGroup className='text-left'>
              <ListGroupItem>Valoración: {comentario.rate}/5</ListGroupItem>
              <ListGroupItem>
                <div className="row">
                  <div className="col-12 col-md-6 text-left">Autor: {comentario.autor}</div>
                  <div className="col-12 col-md-6 text-right">Día: {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comentario.fecha)))}</div>
                </div>
              </ListGroupItem>
              <ListGroupItem>Comentario: {comentario.comment}</ListGroupItem>
            </ListGroup>
          </li>
        );
      });

      return(
        <div className='container'>
          <div className='row'>
            <div className="col-12 col-md-5 m-2">
              <Card>
                <CardImg width="100%" src={this.props.plato.image} alt={this.props.plato.name} />
                <CardBody>
                  <CardTitle>{this.props.plato.name}</CardTitle>
                  <CardText className='text-left'>{this.props.plato.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-2">
              <ul className='list-group list-group-flush'>
                {comentario}
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
}

export default DetallePlato;
