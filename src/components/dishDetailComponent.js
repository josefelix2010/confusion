import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, 
  BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './loadingComponent.js';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (value) => value && value.length;

const maxLength = (len) => (value) => !(value) || (value.length <= len);

const minLength = (len) => (value) => (value) && (value.length >= len);

class CommentModal extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.platoId, values.rate, values.autor, values.comment);
  }

  render() {
    return(
      <React.Fragment>
        <Button className="ml-auto float-right mt-2" onClick={ this.toggleModal } style={{backgroundColor: "#00587a"}}>
          <span className="fa fa-pencil fa-lg"></span> Enviar Comentario
        </Button>
        <Modal isOpen={ this.state.isModalOpen } toggle={ this.toggleModal }>
          <ModalHeader toggle={ this.toggleModal }>Enviar Comentario</ModalHeader>
          <ModalBody className="p-4">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rate">Valoración</Label>
                <Control.select model=".rate" name="rate" id="rate"
                  className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>

              <Row className="form-group">
                <Label htmlFor="autor">Autor <span style={{color: "#ff0000"}}>*</span></Label>
                <Control.text model=".autor" id="autor" name="autor" 
                  placeholder="Ingresa tu nombre y apellido." 
                  className="form-control"
                  validators={{
                    required, 
                    minLength: minLength(3), 
                    maxLength: maxLength(20)
                  }}
                />
                <Errors className="text-danger" model=".autor" show="touched" 
                  messages={{
                    required: "Esto es un campo requerido.",
                    minLength: "Debe ser mayor a 2 caracteres.",
                    maxLength: "Debe ser menor a 15 caracteres."
                  }}
                />
              </Row>

              <Row className="form-group">
                <Label htmlFor="comment" >Tu Comentario <span style={{color: "#ff0000"}}>*</span></Label>
                <Control.textarea model=".comment" id="comment" name="comment" 
                  placeholder="Ingresa tu opinión aquí." rows="10"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(10),
                    maxLength: maxLength(60),
                  }}/>
                <Errors className="text-danger" model=".comment" show="touched" 
                  messages={{
                    required: "Esto es un campo requerido.",
                    minLength: "Tu comentario es muy corto.",
                    maxLength: "Tu comentario es muy largo."
                  }}
                />
              </Row>

              <Row className="form-group">
                <Button className="ml-auto float-right mt-2" type="submit" style={{backgroundColor: "#00587a"}}>Enviar</Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }

}

function RenderPlato({plato}) {
  if(plato != null) {
    return(
      <FadeTransform in transformProps={{
          exitTransform: 'scale(0.5) translateY)-50%)'
        }}>
        <Card>
          <CardImg top src={baseUrl + plato.image} alt={plato.name} />
          <CardBody>
            <CardTitle>{plato.name}</CardTitle>
            <CardText>{plato.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  } else {
    return(
      <div></div>
    );
  }

}

function RenderComments({comments, postComment, platoId}) {

  if(comments != null) {
    let listaComentarios = comments.map((comment) => {
      return(
        <Stagger in>
          <Fade in>
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
          </Fade>
        </Stagger>
      )
    });

    return(
      <React.Fragment>
        { listaComentarios }
        <CommentModal platoId={platoId} postComment={postComment}  />
      </React.Fragment>
    )
  } else {
    return(
      <div></div>
    )
  }
}

const DetallePlato = (props) => {

  if(props.isLoading) {

    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )

  } else if(props.errMess) {

    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )

  } else if(props.plato != null) {

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
              <RenderComments comments={props.comments}
                postComment={props.postComment}
                platoId={props.plato.id}
               />
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
