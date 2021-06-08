import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = (value) => value && value.length;

const maxLength = (len) => (value) => !(value) || (value.length <= len);

const minLength = (len) => (value) => (value) && (value.length >= len);

const isNumber = (value) => !isNaN(Number(value));

const validEmail = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

class Contact extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    alert('Current State is: ' + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  render() {
    return(
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <Breadcrumb >
              <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
              <BreadcrumbItem active>Contactos</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>

        <div className="row row-content text-left mt-4 mb-4">
          <div className="col-12">
            <h3>Cuentános tu opinión</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="nombre" md={2}>Nombre</Label>
                <Col md={10}>
                  <Control.text model=".nombre" id="nombre" name="nombre" 
                    placeholder="Ingresa tu primer nombre." 
                    className="form-control"
                    validators={{
                      required, 
                      minLength: minLength(3), 
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors className="text-danger" model=".nombre" show="touched" 
                    messages={{
                      required: "Esto es un campo requerido.",
                      minLength: "Debe ser mayor a 2 caracteres.",
                      maxLength: "Debe ser menor a 15 caracteres."
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="apellido" md={2}>Apellido</Label>
                <Col md={10}>
                  <Control.text model=".apellido" id="apellido" name="apellido" 
                    placeholder="Ingresa tu primer apellido." 
                    className="form-control"
                    validators={{
                      required, 
                      minLength: minLength(3), 
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors className="text-danger" model=".apellido" show="touched" 
                    messages={{
                      required: "Esto es un campo requerido.",
                      minLength: "Debe ser mayor a 2 caracteres.",
                      maxLength: "Debe ser menor a 15 caracteres."
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="telefono" md={2}>Teléfono</Label>
                <Col md={10}>
                  <Control.text model=".telefono" id="telefono" name="telefono" 
                    placeholder="Ingresa tu número de teléfono." 
                    className="form-control"
                    validators={{
                      required, 
                      minLength: minLength(11), 
                      maxLength: maxLength(11),
                      isNumber
                    }}
                  />
                  <Errors className="text-danger" model=".telefono" show="touched" 
                    messages={{
                      required: "Esto es un campo requerido.",
                      minLength: "Debe tener 11 números.",
                      maxLength: "Debe tener 11 números.",
                      isNumber: "Sólo debe contener números."
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="email" md={2}>Correo Electrónico</Label>
                <Col md={10}>
                  <Control.text model=".email" id="email" name="email" 
                    placeholder="Ingresa tu correo electrónico." 
                    className="form-control"
                    validators={{
                      required,
                      validEmail
                    }}
                  />
                  <Errors className="text-danger" model=".email" show="touched" 
                    messages={{
                      required: "Esto es un campo requerido.",
                      validEmail: "No es una dirección de correo electrónico válida."
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{size: 6, offset: 2}}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox model=".aprueba" name="aprueba" 
                        className="form-check"/> {' '}
                      <strong>Podemos contactarte?</strong>
                    </Label>
                  </div>
                </Col>

                <Col md={{size: 3, offset: 1}}>
                  <Control.select model=".tipoContacto" name="tipoContacto" id="tipoContacto" 
                    className="form-control">
                    <option>Teléfono</option>
                    <option>Correo Electrónico</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="mensaje" md={2}>Tu Opinión</Label>
                <Col md={10}>
                  <Control.textarea model=".mensaje" id="mensaje" name="mensaje" 
                    placeholder="Ingresa tu opinión aquí." 
                    rows="12"
                    className="form-control"/>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{size: 10, offset: 2}}>
                  <Button type="submit" style={{backgroundColor: "#00587a"}}>Enviar</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>

        <div className="row row-content text-left mt-4 mb-4">
          <div className="col-12">
            <h3>¿Dónde estamos?</h3>
          </div>

          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Dirección</h5>
            <address>
              Paso Real, Núcleo #2, San Diego, Carabobo, Venezuela
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>¿Cómo llegar?</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:+424-4536884"><i className="fa fa-phone"></i> Llamar</a>
              <a role="button" className="btn btn-info" href="tel:+424-4536884"><i className="fa fa-skype"></i> Skype</a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;