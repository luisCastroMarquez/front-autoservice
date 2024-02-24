import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para enviar los datos del formulario
    console.log("Datos del formulario:", formData);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={8} md={4}>
          <img
            src="https://i.pinimg.com/564x/69/77/8c/69778c44bdc801aac48b21531a50a252.jpg" // Reemplaza con la URL de tu imagen
            alt="Imagen"
            className="img-fluid"
            style={{ filter: "drop-shadow(4px 6px 8px black)" }}
          />
        </Col>

        {/* Lado Derecho: Formulario de Inicio de Sesión */}
        <Col
          sx={6}
          md={4}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <h1>Registro de Usuario</h1>
          <p>Ingresa los siguientes datos.</p>

          {/* Formulario de Inicio de Sesión */}
          <Form className="w-100 d-flex flex-column gap-2">
            <Form.Group controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="confirmarContraseña">
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirma tu Contraseña"
                name="confirmarContraseña"
                value={formData.confirmarContraseña}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>

          <Button variant="primary" type="submit" className="mb-3">
            Iniciar Sesión
          </Button>

          <p>
            Al continuar, acepta los Términos de venta, los Términos de servicio
            y la Política de privacidad actualizados.
          </p>

          {/* Botones de Redes Sociales */}
          <div className="d-flex flex-column gap-2">
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
