import React from "react";
import { Card as BootstrapCard, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link
import { FaHeart } from "react-icons/fa";

const Card = ({ title, image, price }) => {
  return (
    <BootstrapCard style={{ width: "18rem" }}>
      <BootstrapCard.Img variant="top" src={image} alt={title} />
      <BootstrapCard.Body>
        <BootstrapCard.Title className="d-flex align-items-center">
          {title}{" "}
          <Button variant="light" className="ml-2">
            <FaHeart />
          </Button>
        </BootstrapCard.Title>
        <BootstrapCard.Text className="d-flex" >{price}</BootstrapCard.Text>
        <img src="https://media.istockphoto.com/id/1006074668/es/vector/cinco-estrellas-valorar-icono-vector.jpg?s=612x612&w=0&k=20&c=3D5Wn86pIOathXUX_zX7m5IButhW01YIonSrME7oroI=" alt="estrellas" width= "30%" />

        <Link to="/producto">
          <Button variant="primary" className="d-flex mr-3">
            Comprar Ahora
          </Button>
        </Link>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
