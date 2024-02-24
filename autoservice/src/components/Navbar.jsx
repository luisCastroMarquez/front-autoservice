import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand style={{ marginLeft: '1%' }}  href="#home">Auto Service</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-around"
      >
        <Nav className="ml-auto" style={{ marginLeft: "8%" }}>
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about">Nuestros Servicios</Nav.Link>
          <Nav.Link href="#contact">Contactanos</Nav.Link>
          <Nav.Link href="#taller">Taller Mecanico</Nav.Link>
        </Nav>
        <Nav className="ml-auto" style={{ marginLeft: "25%" }}>
          <Button variant="outline-light" className="m-1">
            Inicio Sesión
          </Button>
          <Button variant="outline-light" className="ml-2 m-1 ">
            Registrarme
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
