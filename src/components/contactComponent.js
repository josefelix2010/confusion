import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Input, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validar(nombre, apellido, telefono, email) {
    const errores = {
      nombre: '',
      apellido: '',
      telefono: '',
      email: ''
    }

    if(this.state.touched.nombre && nombre.length < 3)
      errores.nombre = 'Tu nombre debe tener al menos 3 caracteres.'
    else if(this.state.touched.nombre && nombre.length > 10)
      errores.nombre = 'Tu nombre es muy largo.'

    if(this.state.touched.apellido && apellido.length < 3)
      errores.nombre = 'Tu apellido debe tener al menos 3 caracteres.'
    else if(this.state.touched.apellido && apellido.length > 10)
      errores.apellido = 'Tu apellido es muy largo.'

    const reg = /^\d+$/;
    if(this.state.touched.telefono && !reg.test(telefono))
      errores.telefono = 'El teléfono solo debe contener números.'

    if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) 
      errores.email = 'Correo electrónico debe contener @.';

    return errores;
  }

  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
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
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="nombre" md={2}>Nombre</Label>
                <Col md={10}>
                  <Control.text model=".nombre" id="nombre" name="nombre" 
                    placeholder="Ingresa tu primer nombre." 
                    className="form-control" />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="apellido" md={2}>Apellido</Label>
                <Col md={10}>
                  <Control.text model=".apellido" id="apellido" name="apellido" 
                    placeholder="Ingresa tu primer apellido." 
                    className="form-control"/>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="telefono" md={2}>Teléfono</Label>
                <Col md={10}>
                  <Control.text model=".telefono" id="telefono" name="telefono" 
                    placeholder="Ingresa tu número de teléfono." 
                    className="form-control"/>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="email" md={2}>Correo Electrónico</Label>
                <Col md={10}>
                  <Control.text model=".email" id="email" name="email" 
                    placeholder="Ingresa tu correo electrónico." 
                    className="form-control"/>
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
            </LocalForm>
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
              <a role="button" className="btn btn-info" href="#"><i className="fa fa-skype"></i> Skype</a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;