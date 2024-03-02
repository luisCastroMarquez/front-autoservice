import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ListadoCompras = ({ carrito }) => {
  const [carritoLocal, setCarritoLocal] = useState(carrito);
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const navigate = useNavigate();

  // Función para agregar un producto comprado a la lista
  const handleCompra = (producto) => {
    setCarrito([...carritoLocal, producto]);
  };

  // Función para calcular el total de compras
  const calcularTotal = () => {
    if (!carrito) {
      return 0;
    }

    return carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  };

  const finalizarCompra = () => {
    setCompraFinalizada(true);
    // Puedes redirigir al usuario a la página de métodos de pago aquí
    // navigate("/metodos-pago");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Carrito de Compras</h2>

          {/* Lista de productos en el carrito */}
          <ListGroup>
            {carrito &&
              carrito.map((producto, index) => (
                <ListGroup.Item key={index}>
                  {producto.nombre} - ${producto.precio} - Cantidad:{" "}
                  {producto.cantidad}
                </ListGroup.Item>
              ))}
          </ListGroup>

          {/* Total de compras */}
          <div className="mt-3">
            <h4>Total: ${calcularTotal()}</h4>
          </div>

          {/* Mensaje después de la compra */}
          {compraFinalizada && (
            <p className="text-success mt-3">
              Compra finalizada. Redirigiendo a métodos de pago...
            </p>
          )}
          {/* Botón para finalizar la compra */}
          {!compraFinalizada && (
            <Button
              variant="primary"
              className="mt-3"
              onClick={finalizarCompra}
            >
              Finalizar Compra
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ListadoCompras;
