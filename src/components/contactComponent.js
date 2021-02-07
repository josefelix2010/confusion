import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      aprueba: false,
      tipoContacto: 'Tel.',
      mensaje: '',
      touched: {
        nombre: false,
        apellido: false,
        telefono: false,
        email: false
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleBlur = (campo) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [campo]: true }
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    console.log('Current State is: ' + JSON.stringify(this.state));
    alert('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    const errores = this.validar(this.state.nombre, this.state.apellido, this.state.telefono, this.state.email);

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
            <Form>
              <FormGroup row>
                <Label htmlFor="nombre" md={2}>Nombre</Label>
                <Col md={10}>
                  <Input type="text" id="nombre" name="nombre" placeholder="Ingresa tu primer nombre." 
                    value={ this.state.nombre } valid={errores.nombre === ''} invalid={errores.nombre !== ''} 
                    onBlur={this.handleBlur('nombre')} onChange={this.handleInputChange}/>
                  <FormFeedback>{errores.nombre}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="apellido" md={2}>Apellido</Label>
                <Col md={10}>
                  <Input type="text" id="apellido" name="apellido" placeholder="Ingresa tu primer apellido." 
                    value={ this.state.apellido } valid={errores.apellido === ''} invalid={errores.apellido !== ''} 
                    onBlur={this.handleBlur('apellido')} onChange={this.handleInputChange}/>
                  <FormFeedback>{errores.apellido}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="telefono" md={2}>Teléfono</Label>
                <Col md={10}>
                  <Input type="tel" id="telefono" name="telefono" placeholder="Ingresa tu número de teléfono." 
                    value={ this.state.telefono } valid={errores.telefono === ''} invalid={errores.telefono !== ''} 
                    onBlur={this.handleBlur('telefono')} onChange={this.handleInputChange}/>
                  <FormFeedback>{errores.telefono}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="email" md={2}>Correo Electrónico</Label>
                <Col md={10}>
                  <Input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico." 
                    value={ this.state.email } valid={errores.email === ''} invalid={errores.email !== ''} 
                    onBlur={this.handleBlur('email')} onChange={this.handleInputChange}/>
                  <FormFeedback>{errores.email}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{size: 6, offset: 2}}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="aprueba" checked={ this.state.aprueba } 
                        onChange={this.handleInputChange}/> {' '}
                      <strong>Podemos contactarte?</strong>
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={{size: 3, offset: 1}}>
                  <Input type="select" name="tipoContacto" id="tipoContacto" value={ this.state.tipoContacto } 
                    onChange={this.handleInputChange}>
                    <option>Teléfono</option>
                    <option>Correo Electrónico</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="mensaje" md={2}>Tu Opinión</Label>
                <Col md={10}>
                  <Input type="textarea" id="mensaje" name="mensaje" placeholder="Ingresa tu opinión aquí." 
                    value={ this.state.mensaje } rows="12" onChange={this.handleInputChange}/>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                  <Button type="submit" style={{backgroundColor: "#00587a"}}>Enviar</Button>
                </Col>
              </FormGroup>
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