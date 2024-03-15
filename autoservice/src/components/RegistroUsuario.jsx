import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Registro = () => {
  const initialState = {
    nombre: "",
    mail: "",
    clave: "",
    confirmarClave: "",
    fotoPerfil: "",
    likes: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validación de contraseña
      if (formData.clave !== formData.confirmarClave) {
        throw new Error("Las contraseñas no coinciden");
      }
      const response = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Error en la solicitud" + response.statusText);
      }

      const responseData = await response.json(); // Obtener los datos del usuario desde la respuesta
      localStorage.setItem("userData", JSON.stringify(responseData));
      // Limpiar el formulario después de un registro exitoso
      setFormData(initialState);
      // Redirigir a la ruta del carrito después del registro exitoso
      window.location.href = "/carrito";
    } catch (error) {
      setError(error.message || "Error en la solicitud");
    }
  };

  const handleRegistro = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} lg={4}>
          <img
            src="https://i.pinimg.com/564x/69/77/8c/69778c44bdc801aac48b21531a50a252.jpg" // Reemplaza con la URL de tu imagen
            alt="Imagen"
            className="img-fluid"
            style={{ filter: "drop-shadow(4px 6px 8px black)" }}
          />
        </Col>

        {/* Lado Derecho: Formulario de Inicio de Sesión */}
        <Col
          sx={12}
          md={6}
          lg={4}
          style={{ display: "flex", flexDirection: "column", gap: "2px" }}
        >
          {/* Formulario de Inicio de Sesión */}
          <Form
            className="w-100 h d-flex flex-column gap-1"
            onSubmit={handleSubmit}
          >
            <h2>Registro de Usuario</h2>
            <p>Ingresa los siguientes datos.</p>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formaBasicNombre">
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleRegistro}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                name="mail"
                value={formData.mail}
                onChange={handleRegistro}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="clave"
                value={formData.clave}
                onChange={handleRegistro}
                required
              />
            </Form.Group>
            <Form.Group controlId="confirmarContraseña">
              <Form.Control
                type="password"
                placeholder="Confirma tu Contraseña"
                name="confirmarClave"
                value={formData.confirmarClave}
                onChange={handleRegistro}
                required
              />
            </Form.Group>
            <Form.Group controlId="fotoPerfil">
              <Form.Control
                type="text"
                placeholder="Ingresa la URL de tu foto "
                name="fotoPerfil"
                value={formData.fotoPerfil}
                onChange={handleRegistro}
              />
            </Form.Group>
            <Form.Group controlId="likes">
              <Form.Control
                type="number"
                placeholder="likes"
                name="likes"
                value={formData.likes}
                onChange={handleRegistro}
              />
            </Form.Group>
          </Form>
          <Button
            variant="primary"
            type="submit"
            className=""
            style={{ width: "100%" }}
            onClick={handleSubmit}
          >
            Registrarme
          </Button>
          <div>
            <p>
              Al continuar, acepta los Términos de venta, los Términos de
              servicio y la Política de privacidad actualizados.
            </p>
          </div>

          {/* Botones de Redes Sociales */}
          <div className="d-flex flex-column gap-1">
            <Button variant="outline-danger">Google</Button>
            <Button variant="outline-primary">Facebook</Button>
            <Button variant="outline-dark">Apple</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
