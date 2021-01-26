import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {

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
      <div className="row row-content text-left">
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

export default Contact;