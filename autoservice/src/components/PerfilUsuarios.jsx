import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { FaBell, FaShare, FaUser } from "react-icons/fa";
import Card from "./Card"; // Asegúrate de importar o crear el componente Card

const PerfilUsuarios = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [compartido, setCompartido] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Recupera los datos del usuario del almacenamiento local del navegador
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      try {
        const parsedUserData = JSON.parse(userDataString);
        console.log("Datos del usuario:", parsedUserData.usuario); // Agregar este console.log
        setUserData(parsedUserData.usuario);
      } catch (error) {
        console.error("Error al analizar los datos del usuario:", error);
        setUserData(null);
      }
    } else {
      console.error(
        "No se encontraron datos de usuario en el almacenamiento local"
      );
    }
  }, []);

  const [nuevaImagenPerfil, setNuevaImagenPerfil] = useState("");

  // Manejador para cambiar al modo de edición
  const handleEditarClick = () => {
    setIsEditing(true);
  };

  // Manejador para guardar los cambios y salir del modo de edición
  const handleGuardarClick = () => {
    setUserData({ ...userData, fotoperfil: nuevaImagenPerfil });
    // Limpia el estado de nuevaImagenPerfil después de guardar
    setNuevaImagenPerfil("");
    setIsEditing(false);
  };

  const handleCompartirContenido = () => {
    // Muestra la alerta
    setCompartido(true);
    // Oculta la alerta después de 3 segundos
    setTimeout(() => {
      setCompartido(false);
    }, 2000);
  };

  return (
    <Container>
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
          {userData && userData.fotoperfil ? ( // Verifica si userData.fotoPerfil no es nulo ni una cadena vacía
            <img
              src={userData.fotoperfil}
              alt="Usuario"
              className="img-fluid align-items-center"
              style={{ filter: "drop-shadow(2px 4px 6px black)", width: "60%" }}
            />
          ) : (
            <p>No se ha proporcionado una imagen de perfil</p>
          )}
          {isEditing ? (
            <Form>
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  value={userData?.nombre || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, nombre: e.target.value })
                  }
                />
                <Form.Label>Mail</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su mail"
                  value={userData?.mail || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, mail: e.target.value })
                  }
                />
                <Form.Label>Imagen de Perfil</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="URL de la nueva imagen"
                  value={nuevaImagenPerfil}
                  onChange={(e) => setNuevaImagenPerfil(e.target.value)}
                />
              </Form.Group>

              {/* Otros campos de formulario para la edición... */}

              <Button variant="primary" onClick={handleGuardarClick}>
                Guardar Cambios
              </Button>
            </Form>
          ) : (
            <>
              <h2>{userData?.nombre || ""}</h2>
              <h5>{userData?.mail || ""}</h5>
              <Button
                variant="primary"
                className="mb-3"
                onClick={handleEditarClick}
              >
                Editar Usuario
              </Button>
            </>
          )}
          <Button
            variant="success"
            className="mb-3"
            onClick={handleCompartirContenido}
          >
            Compartir Contenido
            <FaShare className="mr-3" />
          </Button>

          {/* Mensaje de alerta */}
          <Alert variant="success" show={compartido} className="mt-3">
            Contenido compartido con éxito.
          </Alert>

          <p>
            <FaUser className="mr-2" />
            Seguidores: {userData?.likes || ""}
          </p>
          <p>
            <FaShare className="mr-2" />
            Me gusta: {userData?.likes || ""}
          </p>
          <p>
            <span role="img" aria-label="Hashtag">
              #
            </span>
            NombreHashtag: 3
          </p>
        </Col>

        {/* Cards */}
        <Col xs={8}>
          <Row>
            {[...Array(5)].map((_, index) => (
              <Col
                key={index}
                xs={4}
                className=" d-flex align-items-center justify-content-center mt-3"
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

export default PerfilUsuarios;
