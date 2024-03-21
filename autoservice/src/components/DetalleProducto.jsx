import React, { useState, useEffect } from "react";
import { Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { useProductIdContext } from "../context/ProductIdContext";

const DetalleProducto = ({ setProductoSeleccionado }) => {
  const navigate = useNavigate();
  const { productId } = useProductIdContext();
  const [product, setProduct] = useState({});
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");

  console.log("Contenido :", product);

  useEffect(() => {
    if (!productId) {
      return; // No hacer nada si productId es null
    }
    console.log("ID de producto: ", productId);
    obtenerProductoSeleccionado();
  }, [productId]);

  const obtenerProductoSeleccionado = async () => {
    try {
      if (!productId) {
        console.error("ID de producto no válido:", productId);
        return;
      }
      const response = await fetch(
        `http://localhost:3000/producto/${productId}`
      );
      if (!response.ok) {
        throw new Error("Error al obtener id producto" + response.statusText);
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error al obtener id de producto:", error);
    }
  };

  const handleCantidadChange = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const handleAgregarCarrito = () => {
    if (!product) return;
    console.log("Producto agregado al carrito:", productId);
    setMensaje(`¡${product.nombre} ha sido agregado al carrito!`);
    setProductoSeleccionado(product); // Actualiza el producto seleccionado

    // Limpiar el mensaje después de 3 segundos
    setTimeout(() => {
      setMensaje("");
    }, 2500);
  };

  const handleCompra = () => {
    console.log("Realizando la compra...");
    navigate("/listado");
  };

  return (
    <Row className="m-5">
      <Col xs={6}>
        {product && (
          <img src={product.imagen} alt="Producto" className="img-fluid" />
        )}
      </Col>
      <Col xs={6}>
        {product && (
          <>
            <h1>{product.nombre}</h1>
            <p>
              <strong>{product.descripcion}</strong>
            </p>
            <p>
              <strong>Precio: ${product.precio}</strong>
            </p>
            <p>Detalles adicionales del producto.</p>
            <InputGroup className="mb-3">
              <InputGroup>
                <InputGroup.Text>Total</InputGroup.Text>
              </InputGroup>
              <Form.Control
                id="total"
                type="text"
                readOnly
                value={`$${cantidad * product.precio}`}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup>
                <InputGroup.Text>Cantidad</InputGroup.Text>
              </InputGroup>
              <Form.Control
                id="cantidad"
                type="number"
                value={cantidad}
                onChange={handleCantidadChange}
              />
            </InputGroup>
            <InputGroup xs={6} className="mb-3 gap-4">
              <Button variant="primary" onClick={handleAgregarCarrito}>
                Agregar al Carrito
              </Button>
              <Button variant="success" onClick={handleCompra}>
                Comprar producto
              </Button>
              <Link to="/carrito">
                <Button variant="secondary" className="mediumbutton">
                  Volver Atras
                </Button>
              </Link>
            </InputGroup>
            {mensaje && (
              <div className="alert alert-success mt-3" role="alert">
                {mensaje}
              </div>
            )}
          </>
        )}
      </Col>
    </Row>
  );
};

export default DetalleProducto;
