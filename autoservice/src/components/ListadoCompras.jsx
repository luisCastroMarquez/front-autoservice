import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const ListadoCompras = ({ carrito, onEditarCantidad, onEliminarProducto }) => {
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const [eliminadoMensaje, setEliminadoMensaje] = useState("");
  const [total, setTotal] = useState([]); // Estado para almacenar el total
  const navigate = useNavigate();

  console.log("Contenido del carrito:", carrito);
  console.log("Contenido total:", total);

  // Función para calcular el total
  const calcularTotal = () => {
    if (!carrito || carrito.length === 0) {
      return 0;
    }

    // Suma de cantidades por precios de cada producto en el carrito
    const totalCompra = carrito.reduce((total, producto) => {
      // Asegúrate de que el producto tenga las propiedades necesarias
      if (producto && producto.precio && producto.cantidad) {
        return total + producto.precio * producto.cantidad;
      } else {
        // Si el producto no tiene las propiedades necesarias, simplemente ignóralo
        return total;
      }
    }, 0);

    return totalCompra;
  };

  const handleEditarCantidad = (productoId, nuevaCantidad) => {
    // Lógica para editar la cantidad del producto
    onEditarCantidad(productoId, nuevaCantidad);
  };

  // Función para eliminar un producto del carrito
  const handleEliminarProducto = (productoId) => {
    const producto = carrito.find((p) => p.id === productoId);

    if (producto) {
      onEliminarProducto(productoId);
      setEliminadoMensaje(`${producto.nombre} ha sido eliminado del carrito.`);

      // Recalcula el total después de eliminar el producto
      const totalCalculado = calcularTotal();
      setTotal(totalCalculado);

      // Limpiar el mensaje después de 3 segundos
      setTimeout(() => {
        setEliminadoMensaje("");
      }, 3500);
    }
  };

  const finalizarCompra = () => {
    setCompraFinalizada(true);
    // Agregar un retraso de 5 segundos antes de redirigir
    setTimeout(() => {
      // Puedes redirigir al usuario a la página de métodos de pago aquí
      navigate("/producto");
    }, 5000); // 5000 milisegundos = 5 segundos
  };

  // Efecto para calcular el total cuando cambie el carrito
  useEffect(() => {
    // Calcular el total al cargar el carrito y cuando cambie
    const totalCalculado = calcularTotal();
    setTotal(totalCalculado);
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
                      <strong>
                        <h5>
                          {producto.nombre} - ${producto.precio} - Cantidad:
                          {producto.cantidad}
                        </h5>
                      </strong>
                    </Col>
                    <Col xs={3}>
                      <Form.Control
                        type="number"
                        value={producto.cantidad}
                        onChange={(e) =>
                          handleEditarCantidad(
                            producto.cantidad,
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
            <h4>Total: ${total}</h4>
          </div>

          {/* Mensaje después de la compra */}
          {compraFinalizada && (
            <p className="text-success mt-3">
              Compra finalizada. Redirigiendo a métodos de pago...
            </p>
          )}

          {/* Mensaje de eliminación */}
          {eliminadoMensaje && (
            <Alert variant="success" className="mt-3">
              {eliminadoMensaje}
            </Alert>
          )}
          <Link to="/producto/:id">
            <Button variant="success" className="m-4">
              Volver Atras
            </Button>
          </Link>

          {/* Botón para finalizar la compra */}
          {!compraFinalizada && (
            <Button variant="primary" className="" onClick={finalizarCompra}>
              Finalizar Compra
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ListadoCompras;
