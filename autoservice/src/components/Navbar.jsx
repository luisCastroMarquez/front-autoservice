import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // Importa Link

const NavBar = () => {
  const location = useLocation(); // Obtener la ubicación actual

  // Función para verificar si la ubicación actual es la página principal
  const isHomePage = () => {
    return location.pathname === "/home/";
  };

  return isHomePage() ? (
    <Navbar className="d-flex" bg="white">
      <Navbar.Brand className="d-flex justify-content-center" href="#home">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/013/384/813/small/car-service-logo-design-illustration-car-repair-logo-vector.jpg"
          alt="Car Service"
          style={{ width: "50%",  marginLeft: "150%" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="d-flex justify-content-center"
        id="responsive-navbar-nav"
      >
        <Nav className="d-flex align-items-center" style={{ marginLeft: "10%" }}>
          <Nav.Link href="/#home">Inicio</Nav.Link>
          <Nav.Link href="/productos">Nuestros productos</Nav.Link>
          <Nav.Link href="#contact">Contactanos</Nav.Link>
          <Nav.Link href="#taller">Taller Mecanico</Nav.Link>
        </Nav>
        <Nav
          className="d-flex align-items-center"
          style={{ marginLeft: "8%" }}
        >
          {/* Utiliza Link para redirigir al componente Login */}
          <Link to="/login">
            <Button variant="outline-dark" className="m-1">
              Inicio Sesión
            </Button>
          </Link>
          <Link to="/registro">
            <Button variant="outline-dark" className="ml-2 m-1 ">
              Registrarme
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : null;
};

export default NavBar;
