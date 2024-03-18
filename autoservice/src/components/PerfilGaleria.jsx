// PerfilGaleriaForm.js
import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import CardUsuarios from "./CardUsuarios"; // Importa el componente Card
import { useUserId } from "../context/UserIdProvider";

const PerfilGaleria = () => {
  const { userId } = useUserId();
  const [nuevaImagen, setNuevaImagen] = useState("");
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("ID de usuario: " + userId);
    obtenerImagenesGaleria();
  }, [userId]);

  const obtenerImagenesGaleria = async () => {
    try {
      const response = await fetch(`http://localhost:3000/galeria/${userId}`);
      if (!response.ok) {
        throw new Error(
          "Error al obtener las imágenes de la galería" + response.statusText
        );
      }
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error(
        "Error al obtener las imágenes de la galería:", error
      );
    }
  };

  // ...código para enviar la solicitud POST
  const handleAgregarCard = async () => {
    try {
      // Verificar que se proporcionen la nueva imagen y su título
      if (!nuevaImagen || !nuevoTitulo) {
        throw new Error("La URL de la imagen y el título son requeridos");
      }
      console.log("Nuevo título:", nuevoTitulo);
      console.log("Nueva imagen:", nuevaImagen);

      // Realizar la solicitud POST al servidor
      const response = await fetch("http://localhost:3000/galeria", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          imagen: nuevaImagen,
          titulo: nuevoTitulo,
        }),
      });

      // verificar si la solicitud fue exitosa
      if (!response.ok) {
        throw new Error("Hubo un error al agregar la imagen.");
      }
      // Si la respuesta es exitosa, actualiza el estado local de las tarjetas
      const nuevaCard = { imagen: nuevaImagen, titulo: nuevoTitulo };
      setCards([...cards, nuevaCard]);
      setNuevaImagen("");
      setNuevoTitulo("");
      alert("Imagen agregada correctamente.");
    } catch (error) {
      if (error instanceof TypeError) {
        alert(
          "Hubo un error de tipo al procesar la solicitud. Por favor, inténtalo de nuevo más tarde."
        );
      } else {
        alert(
          "Hubo un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde."
        );
      }
    }
  };

  return (
    <Form className="d-flex flex-column p-3">
      {/*  Sección de galería de imágenes  */}
      <Col className="d-flex">
        {/* Renderiza las cards */}
        <Row className="d-flex align-items-center justify-content-center">
          {cards.map((card, index) => (
            <Col
              key={index}
              className="d-flex flex-direction-column m-3"
              style={{ filter: "drop-shadow(2px 4px 6px black)" }}
            >
              <CardUsuarios imagen={card.imagen} titulo={card.titulo} />
            </Col>
          ))}
        </Row>
      </Col>
      <Form.Group className="d-flex m-2" controlId="formImagen">
        <Form.Control
          className="m-2"
          type="text"
          placeholder="URL de la imagen"
          value={nuevaImagen}
          onChange={(e) => setNuevaImagen(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formTitulo">
        <Form.Control
          className="m-2"
          type="text"
          placeholder="Título de la imagen"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
      </Form.Group>
      <Button
        className="d-flex justify-content-center align-items-center m-2"
        variant="primary"
        onClick={handleAgregarCard}
        disabled={!nuevaImagen || !nuevoTitulo}
      >
        Agregar nueva imagen
      </Button>
    </Form>
  );
};

export default PerfilGaleria;
