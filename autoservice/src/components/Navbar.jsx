import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="d-flex justify-content-between" bg="primary" variant="dark">
      <Navbar.Brand href="#home">Auto Service</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#about">Nuestros Servicios</Nav.Link>
        <Nav.Link href="#contact">Contactanos</Nav.Link>
        <Nav.Link href="#taller">Taller Mecanico</Nav.Link>
      </Nav>
      <Nav className="d-flex justify-content-center">
        <Button variant="outline-light" className="m-1">
          Inicio Sesión
        </Button>
        <Button variant="outline-light" className="ml-2 m-1">
          Registrarme
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavBar;