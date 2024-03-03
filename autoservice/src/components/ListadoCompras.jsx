import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ListadoCompras = ({ carrito, onEditarCantidad, onEliminarProducto }) => {
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const navigate = useNavigate();

  console.log("onEliminarProducto:", onEliminarProducto);

  const handleEliminarProducto = (productoId) => {
    // Lógica para eliminar el producto del carrito
    onEliminarProducto(productoId);
  };

  const handleEditarCantidad = (productoId, nuevaCantidad) => {
    // Lógica para editar la cantidad del producto
    onEditarCantidad(productoId, nuevaCantidad);
  };

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

    // Agregar un retraso de 5 segundos antes de redirigir
    setTimeout(() => {
      // Puedes redirigir al usuario a la página de métodos de pago aquí
      navigate("/CarritoCompra");
    }, 5000); // 5000 milisegundos = 5 segundos
  };

  useEffect(() => {
    // Lógica adicional después de que se elimina un producto (si es necesario)
    // ...
  }, [carrito]);

  return (
    <Container className="d-flex mt-4">
      <Row>
        <Col>
          <h2>Carrito de Compras</h2>

          {/* Lista de productos en el carrito */}
          <ListGroup
            className="d-flex align-items-center"
            style={{ filter: "drop-shadow(4px 4px 8px black)", gap: "10px" }}
          >
            {carrito &&
              carrito.map((producto, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex align-items-center border-dark"
                >
                  <Row className="d-flex align-items-center">
                    <Col xs={2}>
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="img-fluid"
                      />
                    </Col>
                    <Col xs={5}>
                      {producto.nombre} - ${producto.precio} - Cantidad:{" "}
                      {producto.cantidad}
                    </Col>
                    <Col xs={3}>
                      <Form.Control
                        type="number"
                        value={producto.cantidad}
                        onChange={(e) =>
                          handleEditarCantidad(
                            producto.id,
                            parseInt(e.target.value, 10)
                          )
                        }
                      />
                    </Col>
                    <Col xs={2}>
                      <Button
                        variant="danger"
                        onClick={() => handleEliminarProducto(producto.id)}
                      >
                        Eliminar
                      </Button>
                    </Col>
                  </Row>
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
