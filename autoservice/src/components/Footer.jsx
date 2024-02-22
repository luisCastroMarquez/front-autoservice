import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const Footer = () => {
  const handleChangeLanguage = () => {
    // Lógica para cambiar el idioma
    console.log("Cambiar idioma");
  };
  return (
    <footer className="bg-primary text-light">
      <Container>
        <Row className="justyfy-content-center align-items-center">
          <Col
            className="d-flex  justify-content-between align-items-end"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <ListGroup
              style={{
                flexDirection: "row",
                gap: "2%",
              }}
            >
              <ListGroupItem>
                <ul className="list-unstyled mb-0">
                  <h5>Servicios</h5>
                  <li>Hogar</li>
                  <li>Comercio</li>
                  <li>Nuestra historia</li>
                  <li>Blogs</li>
                </ul>
              </ListGroupItem>
              <ListGroupItem>
                <ul className="list-unstyled mb-0">
                  <h5>Compras</h5>
                  <li>Envios y Devoluciones</li>
                  <li>Seguimiento</li>
                  <li>Preguntas Frecuentes</li>
                </ul>
              </ListGroupItem>
              <ListGroupItem>
                <ul className="list-unstyled mb-0">
                  <h5>Contacto</h5>
                  <li>Telefono:(+569) 98765432 </li>
                  <li>Email: autoservice@email.com</li>
                </ul>
              </ListGroupItem>
            </ListGroup>
            <Button variant="primary" onClick={handleChangeLanguage}>
              Cambiar Idioma
            </Button>
          </Col>
          <Col>
            <p>Recibe Nuevas Promociones</p>
            <p>Escribenos cualquier consulta o suguerencia.</p>
            <Form className="d-flex justify-content-between flex-wrap align-items-end">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
              </Form.Group>
              <Form.Group>
                <Button
                  className="align-items-end"
                  variant="outline-light"
                  type="submit"
                >
                  Enviar
                </Button>
              </Form.Group>
            </Form>
            <p>&copy; 2024 Mi Proyecto. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
