import React from "react";
import { Card as BootstrapCard, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link
import { FaHeart } from "react-icons/fa";

const Card = ({ title, image, price, onAgregarCarrito }) => {
  const handleAgregarCarrito = () => {
    const producto = {
      id: 2, // Puedes usar alguna lógica para generar IDs únicos
      nombre: title,
      precio: parseFloat(price.replace("$", "")),
      cantidad: 1, // Puedes ajustar esto según tu lógica
      imagen:
        "https://rcclin.cl/wp-content/uploads/2021/12/turbo-timer-apexi.jpg",
      // ... otras propiedades del producto
    };

    onAgregarCarrito(producto);
  };

  return (
    <BootstrapCard style={{ width: "16rem" }}>
      <BootstrapCard.Img variant="top" src={image} alt={title} />
      <BootstrapCard.Body>
        <BootstrapCard.Title className="d-flex align-items-center">
          {title}{" "}
          <Button variant="light" className="ml-2">
            <FaHeart />
          </Button>
        </BootstrapCard.Title>
        <BootstrapCard.Text>{price}</BootstrapCard.Text>
        <img
          src="https://media.istockphoto.com/id/1006074668/es/vector/cinco-estrellas-valorar-icono-vector.jpg?s=612x612&w=0&k=20&c=3D5Wn86pIOathXUX_zX7m5IButhW01YIonSrME7oroI="
          alt="estrellas"
          width="30%"
        />

        <Link to="/producto">
          <Button
            variant="primary"
            className="d-flex mr-3"
            onClick={handleAgregarCarrito}
          >
            Comprar Ahora
          </Button>
        </Link>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
