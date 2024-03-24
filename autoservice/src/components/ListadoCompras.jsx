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
import { useProductosContext } from "../context/ProductosContext";

const ListadoCompras = () => {
  const {
    dataCart,
    productosQuantities,
    totalCart,
    addToCart,
    removeFromCart,
  } = useProductosContext();

  const navigate = useNavigate();
  const [showRedirectingAlert, setShowRedirectingAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [cuotas, setCuotas] = useState(1); // Estado para el número de cuotas

  const handleAddToCart = (producto) => {
    addToCart(producto);
  };

  const handleRemoveFromCart = (producto) => {
    removeFromCart(producto);
  };

  const groupProductosByType = (cart) => {
    const groupedProductos = {};
    cart.forEach((producto) => {
      if (groupedProductos[producto.id]) {
        groupedProductos[producto.id].cantidad += 1;
      } else {
        groupedProductos[producto.id] = {
          producto,
          cantidad: 1,
        };
      }
    });
    return Object.values(groupedProductos);
  };

  const handleBtnPago = () => {
    setShowRedirectingAlert(true);
    setTimeout(() => {
      setShowRedirectingAlert(false);
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        navigate("/"); // Redirige al usuario a la página principal después del pago exitoso
      }, 2000); // Oculta el mensaje de pago exitoso después de 2 segundos
    }, 2000); // Muestra el mensaje de redirección durante 2 segundos antes de mostrar el mensaje de pago exitoso
  };

  // Función para formatear el valor a pesos chilenos
  const formatToChileanPesos = (value) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  // Función para manejar cambios en el input de cuotas
  const handleCuotasChange = (event) => {
    const value = parseInt(event.target.value, 10); // Convertir el valor a entero
    setCuotas(value); // Actualizar el estado de las cuotas
  };

  const groupedProductos = groupProductosByType(dataCart);

  return (
    <Container className="d-flex mt-4">
      <Row>
        <Col>
          <h2>Carrito de Compras</h2>

          {/* Lista de productos en el carrito */}
          <ListGroup
            className="d-flex align-items-center "
            style={{ filter: "drop-shadow(4px 4px 8px black)", gap: "10px" }}
          >
            {groupedProductos.map((group) => (
              <ListGroup.Item
                key={group.producto.id}
                className="d-flex align-items-center border-dark"
              >
                <Row className="d-flex align-items-center">
                  <Col xs={3}>
                    <img
                      src={group.producto.imagen}
                      alt={group.producto.nombre}
                      className="img-fluid"
                    />
                  </Col>
                  <Col xs={3}>
                    <strong>
                      <h5>{group.producto.nombre}</h5>
                    </strong>
                  </Col>
                  <Col xs={3}>
                    <strong>
                      {formatToChileanPesos(
                        group.producto.precio *
                          productosQuantities[group.producto.id]
                      )}
                    </strong>
                  </Col>
                  <Col className="d-flex justify-content-between gap-5" xs={3}>
                    <Button
                      className="d-flex "
                      variant="danger"
                      onClick={() => handleRemoveFromCart(group.producto)}
                    >
                      -
                    </Button>
                    <strong>
                      <p>{productosQuantities[group.producto.id] || 0}</p>
                    </strong>
                    <Button
                      className="btnCarro btn-large"
                      variant="success"
                      onClick={() => handleAddToCart(group.producto)}
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {/* Total de compras */}
          <div className="mt-5">
            <h2>Total: {formatToChileanPesos(totalCart)}</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Precio Total a pagar</th>
                  <th>Precio total hasta 6 meses precio contado </th>
                </tr>
              </thead>
              <tbody>
                {groupedProductos
                  .sort((a, b) =>
                    a.producto.nombre.localeCompare(b.producto.nombre)
                  )
                  .map((group) => {
                    const precioTotal =
                      group.producto.precio *
                      (productosQuantities[group.producto.id] || 0);
                    let precioPorCuota = (totalCart || 0) / cuotas;

                    // Aplicar interés del 2% después de la sexta cuota
                    if (cuotas > 6) {
                      const cuotasDespuesDe6 = cuotas - 6;
                      const interes = 1.2; // Factor de interés del 2%
                      precioPorCuota *= Math.pow(interes, cuotasDespuesDe6);
                    }
                    return (
                      <tr key={group.producto.id}>
                        <td>{group.producto.nombre}</td>
                        <td>{productosQuantities[group.producto.id] || 0}</td>
                        <td>{formatToChileanPesos(group.producto.precio)}</td>
                        <td>{formatToChileanPesos(precioTotal)}</td>
                        <td>{formatToChileanPesos(precioPorCuota)}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="formCuotas">
                    <strong>Número de Cuotas:</strong>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="formCuotas"
                    value={cuotas}
                    onChange={handleCuotasChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to="/productos">
            <Button variant="success" className="m-4">
              Volver Atras
            </Button>
          </Link>
          <Button variant="primary" onClick={handleBtnPago}>
            Pagar
          </Button>
          {/* Alerta de pago completado */}
          <Alert
            variant="info"
            show={showRedirectingAlert}
            onClose={() => setShowRedirectingAlert(false)}
            dismissible
          >
            Redirigiendo al método de pago...
          </Alert>

          {/* Alerta de pago exitoso */}
          <Alert
            variant="success"
            show={showSuccessAlert}
            onClose={() => setShowSuccessAlert(false)}
            dismissible
          >
            ¡Pago exitoso!
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default ListadoCompras;
