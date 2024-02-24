import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Nav,
} from "react-bootstrap";
import { FaBell, FaUser, FaQuestion } from "react-icons/fa";
import Card from "./Card"; // Asegúrate de importar o crear el componente Card
import Footer from "./Footer";

const CarritoCompras = () => {
  return (
    <Container className="mt-5">
      {/* Barra superior */}
      <Row className="mb-4">
        <Col xs={2}>
          <img src="ruta_del_logo" alt="Auto Service" className="img-fluid" />
        </Col>
        <Col xs={8}>
          <InputGroup>
            <Form.Control type="text" placeholder="Buscar en el carrito" />
            <InputGroup>
              <Nav className="ml-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#about">Nuestros Servicios</Nav.Link>
                <Nav.Link href="#contact">Contactanos</Nav.Link>
                <Nav.Link href="#taller">Taller Mecanico</Nav.Link>
              </Nav>
            </InputGroup>
          </InputGroup>
        </Col>
        <Col xs={2} className="d-flex justify-content-end align-items-center">
          <FaBell className="mr-3" />
          <FaUser className="mr-3" />
          <FaQuestion />
        </Col>
      </Row>

      {/* Contenido principal */}
      <Row className="bg-light">
        <Col xs={8}>
          <h1>Producto Especial</h1>
          <h5>Un turbocompresor Garrett.</h5>
          <p>
            Es un sistema de sobrealimentación que comprime el aire,
            posibilitando que el motor reciba más oxígeno para realizar la
            mezcla con el combustible.
          </p>
          <Button variant="primary" className="mr-3">
            Obtener ahora
          </Button>
          <Button variant="secondary">Aprender más</Button>
        </Col>
        <Col xs={4}>
          <img
            src="https://i.pinimg.com/564x/b9/2e/b6/b92eb668712d30b0f54e8c87c962fb66.jpg"
            alt="Imagen"
            className="img-fluid"
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
          />
        </Col>
      </Row>

      {/* Cards */}
      <h3>Accesorios</h3>

      <Row className="mt-4">
        {[...Array(8)].map((_, index) => (
          <Col key={index} xs={3} className="mb-4">
            <Card
              title={`Producto ${index + 1}`}
              image="ruta_de_imagen"
              price={`$${(index + 1) * 10}`}
              quality={`Calidad ${index + 1}`}
              description={`Descripción del producto ${index + 1}`}
              // Puedes pasar propiedades específicas para cada card
              // Ejemplo: title="Producto 1", image="ruta_de_imagen", price="$20", etc.
            />
          </Col>
        ))}
      </Row>

      <Footer />
    </Container>
  );
};

export default CarritoCompras;
