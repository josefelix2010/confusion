import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardHeader, CardBody, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

const imgLider = {
  height: '105px',
  width:'105px',
  minHeight: '105px',
  maxHeight: '105px',
  minWidth: '105px',
  maxWidth: '105px'
}

function RenderLider({lider}) {

  return(
    <Stagger in>
      <Fade in>
        <div className="row">
          <div key={lider.id} className="col-12 mt-5">
            <Media tag="li">
              <Media left middle>
                <Media object src={lider.image} style={imgLider} alt={lider.name} />
              </Media>
              <Media body className="ml-5 text-left">
                <Media heading>{lider.name} ({lider.abbr})</Media>
                <p>{lider.designation}</p>
                <p>{lider.description}</p>
              </Media>
            </Media>
          </div>
        </div>
      </Fade>
    </Stagger>
  );

}

const AboutUs = (props) => {

  const lideres = props.lideres.map((lider) => {
    return(
      <div className="col-12 mt-3 mb-3" key={lider.id}>
        <RenderLider lider={lider} />
      </div>
     );
  })

  return(
    <div className="container">
      <div className="row mb-3">
        <div className="col-12">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-12 col-md-8">
          <h2 className="text-left">Nuestros comienzos</h2>
          <br />
          <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div className="col-12 col-md-4">
          <Card>
            <CardHeader className="cardHeader">Información</CardHeader>
            <CardBody>
              <dl className="row p-1 text-left">
                <dt className="col-5">Fundación</dt>
                <dd className="col-7">20 de Octubre de 2013</dd>
                <dt className="col-5">Propietario</dt>
                <dd className="col-7">José F. Chaparro J. & Asociados</dd>
                <dt className="col-5">Ganancias del Último Año</dt>
                <dd className="col-7">$525.500,00</dd>
                <dt className="col-5">Empleados</dt>
                <dd className="col-7">35</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-12">
          <Card>
            <CardHeader className="cardHeader">Misión</CardHeader>
            <CardBody className="bg-faded p-2">
              <blockquote className="blockquote">
                <p className="mb-0">Un día las personas que no creyeron en ti les contarán a todos como llegaron 
                  a conocerte.</p>
                <footer className="blockquote-footer">Johnny Depp,
                <cite title="Fuente de soda"> el día que perdió contra su esposa.</cite></footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content mt-4 mb-4">
        <div className="col-12">
          <h2 className="text-left">Nuestros Líderes</h2>
        </div>
        <div className="col-12">
          <Media list>
            {lideres}
          </Media>
        </div>
      </div>
    </div>
  )

}

export default AboutUs;
