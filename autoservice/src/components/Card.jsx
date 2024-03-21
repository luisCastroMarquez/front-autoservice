import React from "react";
import { Card as BootstrapCard, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProductosContext } from "../context/ProductosContext";

const Card = ({ dataProducto }) => {
  const navigate = useNavigate();
  const { addToCart } = useProductosContext();

  const redirectToDetail = () => navigate("/producto/" + dataProducto.id);
  const handleAddToCartClick = (producto) => {
    addToCart(producto);
  };

  return (
    <BootstrapCard style={{ width: "16rem" }}>
      <BootstrapCard.Img
        variant="top"
        src={dataProducto.imagen}
        alt={dataProducto.titulo}
      />
      <BootstrapCard.Body>
        <BootstrapCard.Title className="d-flex align-items-center">
          {dataProducto.titulo}{" "}
          <Button variant="light" className="ml-2">
            <FaHeart />
          </Button>
        </BootstrapCard.Title>
        <BootstrapCard.Text>{dataProducto.precio}</BootstrapCard.Text>
        <img
          src="https://media.istockphoto.com/id/1006074668/es/vector/cinco-estrellas-valorar-icono-vector.jpg?s=612x612&w=0&k=20&c=3D5Wn86pIOathXUX_zX7m5IButhW01YIonSrME7oroI="
          alt="estrellas"
          width="30%"
        />

        <Button
          variant="primary"
          className="d-flex mr-3"
          onClick={redirectToDetail}
        >
          Comprar Ahora
        </Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
