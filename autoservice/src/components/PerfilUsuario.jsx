import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { FaBell, FaShare, FaUser } from "react-icons/fa";
import Card from "./Card"; // Asegúrate de importar o crear el componente Card

const PerfilUsuario = () => {
  return (
    <Container className="mt-5 ">
      {/* Barra superior */}
      <Row className="d-flex align-items-center">
        <Col xs={3} className="d-flex justify-content-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/384/813/small/car-service-logo-design-illustration-car-repair-logo-vector.jpg"
            alt="Logo"
            className="img-fluid"
          />
        </Col>
        <Col xs={6}>
          <InputGroup>
            <Form.Control type="text" placeholder="Buscar en la galería" />
          </InputGroup>
        </Col>
        <Col xs={3} className="d-flex justify-content-center gap-4">
          <FaBell className="mr-3" style={{ fontSize: "200%" }} />
          <FaShare className="mr-3" style={{ fontSize: "200%" }} />
          <FaUser style={{ fontSize: "200%" }} />
        </Col>
      </Row>

      {/* Contenido principal */}
      <Row className=" bg-light">
        <Col
          className="d-flex flex-column align-items-center justify-content-center gap-3 bg-light"
          xs={4}
        >
          <img
            src="https://i.pinimg.com/564x/e4/96/d7/e496d7ccf54886ee88eaab0717c27250.jpg"
            alt="Usuario"
            className="img-fluid align-items-center"
            style={{ filter: "drop-shadow(2px 4px 6px black)", width: "60%" }}
          />
          <h2>Luis Castro M</h2>
          <h5>@luiscm</h5>
          <Button variant="primary" className="mb-3">
            Editar Usuario
          </Button>
          <Button variant="success" className="mb-3">
            Compartir Contenido
            <FaShare className="mr-3" />
          </Button>
          <p>
            <FaUser className="mr-2" />
            Seguidores: 100
          </p>
          <p>
            <FaShare className="mr-2" />
            Me gusta: 50
          </p>
          <p>
            <span role="img" aria-label="Hashtag">
              #
            </span>
            NombreHashtag: 3
          </p>
        </Col>
        <Col xs={8}>
          {/* Cards */}

          <Row className="mt-4">
            {[...Array(5)].map((_, index) => (
              <Col
                key={index}
                xs={4}
                className="mb-4 d-flex align-items-center justify-content-center"
                style={{ filter: "drop-shadow(2px 4px 6px black)" }}
              >
                <Card
                  title={`Subaru WRX STI ${index + 1}`}
                  image="https://i.pinimg.com/564x/b6/9f/c2/b69fc2d0a9cba8cfca0ba681bdf28d45.jpg"
                  // Puedes agregar más propiedades según tus necesidades
                  // Ejemplo: title="Imagen 1", image="ruta_de_imagen", etc.
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PerfilUsuario;
