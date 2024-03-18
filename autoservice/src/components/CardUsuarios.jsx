import React from "react";
import { Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const CardUsuarios = ({ imagen, titulo }) => {
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>
          {titulo}
          <FaHeart />
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardUsuarios;
