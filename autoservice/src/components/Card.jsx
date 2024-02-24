import React from "react";
import { Card as BootstrapCard, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const Card = ({ title, image, price, quality, description }) => {
  return (
    <BootstrapCard style={{ width: "18rem" }}>
      <BootstrapCard.Img variant="top" src={image} alt={title} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{description}</BootstrapCard.Text>
        <BootstrapCard.Text>Price: {price}</BootstrapCard.Text>
        <BootstrapCard.Text>Quality: {quality}</BootstrapCard.Text>
        <Button variant="primary">Add to Cart</Button>
        <Button variant="light" className="ml-2">
          <FaHeart />
        </Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
