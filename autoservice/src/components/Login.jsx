import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link

const Login = () => {
  const [mail, setEmail] = useState("");
  const [clave, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail,
          clave,
        }),
      });

      if (response.ok) {
        // Autenticación exitosa, puedes redirigir al usuario a la página de carrito
        console.log("Autenticación exitosa");
        // Redirige a la ruta CarritoCompra después de iniciar sesión
        // ...
      } else {
        // Autenticación fallida, maneja el error o muestra un mensaje al usuario
        console.error("Error en la autenticación");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={8} md={4}>
          <img
            src="https://i.pinimg.com/736x/d7/f7/2b/d7f72b89e02d58e06a3bc80396d15512.jpg"
            alt="Imagen"
            className="img-fluid"
            style={{ filter: "drop-shadow(4px 6px 8px black)", width: "96%" }}
          />
        </Col>

        {/* Lado Derecho: Formulario de Inicio de Sesión */}
        <Col xs={8} md={4} style={{ display: "flex", flexDirection: "column" }}>
          <h1>Iniciar Sesión</h1>
          <p>¿Es tu primera vez? Registrate</p>

          {/* Formulario de Inicio de Sesión */}
          <Form className="w-100 d-flex flex-column gap-4">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Link to="/carrito">
              <Button
                variant="primary"
                type="submit"
                className="mb-2"
                style={{ width: "100%" }}
                onClick={handleLogin}
              >
                Iniciar Sesión
              </Button>
            </Link>
          </Form>

          {/* Botones de Redes Sociales */}
          <div className="d-flex flex-column gap-2">
            <p className="d-flex justify-content-center">
              ¿Olvidaste la Contraseña?
            </p>
            <p className="d-flex justify-content-center">
              Al continuar, aceptas los terminos de venta los terminos de
              servicios y la politica de privacidad actualizados.
            </p>

            <Button variant="outline-danger" className="mr-2">
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
