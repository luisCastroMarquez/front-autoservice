import React from "react";
import { BiChevronDown } from "react-icons/bi";

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
    <footer className="d-flex bg-dark text-light mt-4">
      <Container>
        <Row className="justyfy-content-center align-items-center">
          <Col
            xs={12}
            md={8}
            lg={7}
            className="d-flex align-items-center justify-content-center flex-column"
            style={{ gap: "8px" }}
          >
            <ListGroup
              className="d-flex flex-wrap bg-dark"
              style={{
                flexDirection: "row",
                gap: "16px",
              }}
            >
              <ListGroupItem className="bg-dark border-dark">
                <ul className="list-unstyled mb-0 text-white">
                  <h5>Servicios</h5>
                  <li>Hogar</li>
                  <li>Comercio</li>
                  <li>Nuestra historia</li>
                  <li>Blogs</li>
                </ul>
              </ListGroupItem>
              <ListGroupItem className="bg-dark border-dark">
                <ul className="list-unstyled mb-0 text-white">
                  <h5>Compras</h5>
                  <li>Envios y Devoluciones</li>
                  <li>Seguimiento</li>
                  <li>Preguntas Frecuentes</li>
                </ul>
              </ListGroupItem>
              <ListGroupItem className="bg-dark border-dark">
                <ul className="list-unstyled mb-0 text-white">
                  <h5>Contacto</h5>
                  <li>Telefono:(+569) 98765432 </li>
                  <li>Email: autoservice@email.com</li>
                </ul>
              </ListGroupItem>
            </ListGroup>
            <Button
              variant="white"
              size="sm"
              className="bg-white mr-2 align-self-start"
              onClick={handleChangeLanguage}
              style={{ marginLeft: "10%", width: "18%" }}
            >
              Español <BiChevronDown size={24} />
            </Button>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <br />
            <p>Recibe Nuevas Promociones</p>
            <p>Escribenos cualquier consulta o suguerencia.</p>
            <Form className="d-flex flex-wrap align-items-end gap-5">
              <Form.Group controlId="formBasicEmail" className="mr-2">
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
            <p className="text-center mt-3">
              &copy; Luis Andrés Castro Márquez Mi Proyecto 2024.
              <br /> Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
