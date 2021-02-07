import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler,NavItem, Collapse, Jumbotron, Modal, ModalHeader, ModalBody,
  Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin = (event) => {
    this.toggleModal();

    alert("Usuario: "+this.usuario.value+".\nContraseña: "+this.password.value+".\nRecordaerme: "+this.recordar.checked);
    event.preventDefault();
  }

  render() {

    return(
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="../../assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
            </NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen} className={this.state.isNavOpen ? "text-left" : ""}>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg" /> Inicio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-sm" /> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-sm" /> Menú
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-sm" /> Contactos
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={ this.toggleModal }>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron fluid>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-12">
                <h2 className="text-left">Ristorante Con Fusion</h2>
                <p className="text-left">Nos inspiramos en los platos más sabrosos de la comida rapida.
                <br/>
                Nuestras deliciosas creaciones harán vibrar tu sentido del gusto.</p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={ this.state.isModalOpen } toggle={ this.toggleModal }>
          <ModalHeader isOpen={ this.state.isModalOpen } toggle={ this.toggleModal }>Iniciar Sesión</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="usuario" md={1}>Usuario</Label>
                <Input type="text" id="usuario" name="usuario" innerRef={(input) => this.usuario = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password" md={1}>Contraseña</Label>
                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="recordar" innerRef={(input) => this.recordar = input} /> {' '}
                  <strong>Recordarme siempre para este sitio.</strong>
                </Label>
              </FormGroup>
              <Button className="float-right mt-2" type="submit" value="submit" style={{backgroundColor: "#00587a"}}>Ingresar</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );

  }

}

export default Header;
