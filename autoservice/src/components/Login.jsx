import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  const [mail, setEmail] = useState("");
  const [clave, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta

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
        console.log("Inicio de sesión exitoso.");
        const { token } = await response.json();
        localStorage.setItem("token", token);
        // Redirigir a la ruta del usuarios después del registro exitoso
        window.location.href = "/usuarios";
      } else if (response.status === 401) {
        console.log("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        setShowAlert(true); // Mostrar la alerta si las credenciales son incorrectas
      } else {
        // Autenticación fallida, maneja el error o muestra un mensaje al usuario
        console.error(
          "Error en la autenticación",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Manejando submit...");
    await handleLogin();
  };

  useEffect(() => {
    // Cuando showAlert cambia a true, inicia un temporizador para ocultar la alerta después de unos segundos
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 2500);
    }
    // Limpiar el temporizador si el componente se desmonta o si showAlert cambia antes de que el temporizador expire
    return () => clearTimeout(timer);
  }, [showAlert]);

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

          {/* Alerta de Bootstrap */}
          {showAlert && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Credenciales o correo incorrecto. Por favor, inténtalo de nuevo.
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setShowAlert(false)}
              ></button>
            </div>
          )}

          {/* Formulario de Inicio de Sesión */}
          <Form
            className="w-100 d-flex flex-column gap-4"
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={mail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                value={clave}
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mb-2"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Iniciar Sesión
            </Button>
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
