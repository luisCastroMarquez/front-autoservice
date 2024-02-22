import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container
      className="mt-5"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBlockEnd: "60px",
      }}
    >
      <Row>
        <Col md={6}>
          <img
            src="https://i.pinimg.com/736x/d7/f7/2b/d7f72b89e02d58e06a3bc80396d15512.jpg" // Reemplaza con la URL de tu imagen
            alt="Imagen"
            className="img-fluid"
          />
        </Col>

        {/* Lado Derecho: Formulario de Inicio de Sesión */}
        <Col md={6} className="d-flex flex-column align-items-center">
          <h1>Iniciar Sesión</h1>
          <p>Bienvenido de nuevo. Ingresa tus datos.</p>

          {/* Formulario de Inicio de Sesión */}
          <Form className="w-100">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mb-3">
              Iniciar Sesión
            </Button>
          </Form>

          <p>o inicia sesión con:</p>

          {/* Botones de Redes Sociales */}
          <div className="d-flex">
            <Button variant="outline-dark" className="mr-2">
              Google
            </Button>
            <Button variant="outline-primary" className="mr-2">
              Facebook
            </Button>
            <Button variant="outline-dark">Apple</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
