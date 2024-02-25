import React from "react";
import { Card as BootstrapCard, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link
import { FaHeart } from "react-icons/fa";

const Card = ({ title, image, price }) => {
  return (
    <BootstrapCard style={{ width: "18rem" }}>
      <BootstrapCard.Img variant="top" src={image} alt={title} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>
          {title}{" "}
          <Button variant="light" className="ml-2">
            <FaHeart />
          </Button>
        </BootstrapCard.Title>
        <BootstrapCard.Text>Price: {price}</BootstrapCard.Text>

        <Link to="/producto">
          <Button variant="primary" className="mr-3">
            Obtener ahora
          </Button>
        </Link>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
