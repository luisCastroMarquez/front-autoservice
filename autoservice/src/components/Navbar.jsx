import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand style={{ marginLeft: "1%" }} href="#home">
        <img
          className="mr-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikcrYqaQYC5VJ6zlVJDmk0-nJPujPcNj-PQ&s"
          alt="Auto Service"
          style={{ width: "120px", height: "40px" }}
        />
      </Navbar.Brand>
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
          {/* Utiliza Link para redirigir al componente Login */}
          <Link to="/login">
            <Button variant="outline-light" className="m-1">
              Inicio Sesión
            </Button>
          </Link>
          <Link to="/registro">
            <Button variant="outline-light" className="ml-2 m-1 ">
              Registrarme
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
