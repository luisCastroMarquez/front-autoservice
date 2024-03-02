import React, { useState } from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { FaShoppingCart, FaShoppingBasket, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import Card from "./Card";
import Footer from "./Footer";

const ProductoCompras = ({ onCompra }) => {
  const [cantidad, setCantidad] = useState(1);
  const navigate = useNavigate(); // Obtén la función navigate

  // Lógica para manejar cambios en la cantidad y actualizar el total
  const handleCantidadChange = (event) => {
    const nuevaCantidad = event.target.value;
    setCantidad(nuevaCantidad);
  };

  // Función para manejar la compra y agregar productos seleccionados al estado
  const handleCompra = () => {
    // Lógica para agregar el producto al carrito
    const producto = {
      id: 1,
      nombre: "Reloj P. de Turbo",
      precio: 100,
      cantidad: parseInt(cantidad, 10),
    };

    // Emitir el evento hacia el componente padre
    onCompra(producto);

    // Navega a la página de listado después de la compra
    navigate("/listado");
  };

  const handleAgregarCarrito = (producto) => {
    // Lógica para agregar al carrito, utilizar un estado global o contexto
    // Ejemplo: dispatch({ type: "ADD_TO_CART", product: currentProduct, quantity: cantidad });
    console.log("Producto agregado al carrito:", producto);
  };

  const total = `$${cantidad * 100}`;

  return (
    <Container className="mt-5">
      {/* Barra superior */}
      <Row className="d-flex align-items-center">
        <Col xs={2} className="d-flex justify-content-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/384/813/small/car-service-logo-design-illustration-car-repair-logo-vector.jpg"
            alt="Car Service"
            className="img-fluid"
          />
        </Col>
        <Col xs={8}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Buscar en el carrito de compras"
            />
          </InputGroup>
        </Col>
        <Col
          xs={2}
          className="d-flex justify-content-end align-items-center gap-4"
        >
          <FaShoppingCart className="mr-3" style={{ fontSize: "200%" }} />
          <FaShoppingBasket className="mr-3" style={{ fontSize: "200%" }} />
          <Link to="/usuario">
            <FaUser className="mr-3" style={{ fontSize: "200%" }} />
          </Link>
        </Col>
      </Row>

      {/* Contenido principal */}
      <Row className="m-5">
        <Col xs={6}>
          <img
            src="https://nolimit.ua/content/images/9/480x480l50nn0/innovate-mtx-l-plus-shpl-zond-kabel-240-sm-69885348339333.jpg"
            alt="Producto"
            className="img-fluid"
          />
        </Col>
        <Col xs={6}>
          <h1>Reloj P. de Turbo</h1>
          <p>Descripción corta del producto.</p>
          <p>
            <strong>Precio:</strong> $100
          </p>
          <p>Detalles adicionales del producto.</p>
          <InputGroup className="mb-3">
            <InputGroup>
              <InputGroup.Text>Total</InputGroup.Text>
            </InputGroup>
            <Form.Control type="text" readOnly value={`$${cantidad * 100}`} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup>
              <InputGroup.Text>Cantidad</InputGroup.Text>
            </InputGroup>
            <Form.Control
              type="number"
              value={cantidad}
              onChange={handleCantidadChange}
            />
          </InputGroup>
          <InputGroup xs={6} className="mb-3 gap-4">
            <Button
              variant="primary"
              className="mr-3"
              onClick={() =>
                handleAgregarCarrito({
                  id: 1,
                  nombre: "Reloj P. de Turbo",
                  precio: 20.0,
                  // ... otras propiedades del producto
                })
              }
            >
              Agregar al Carrito
            </Button>
            <Button variant="success" className="mr-3" onClick={handleCompra}>
              Comprar
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {/* Cards */}

      <Row className="d-flex flex-wrap justify-content-center mt-5 gap-4 bg-light">
        <h3>Otros Accesorios</h3>
        {[...Array(4)].map((_, index) => (
          <Col
            key={index}
            className=" d-flex justify-content-center mb-4"
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
          >
            <Card
              title={`Turbo Timer HKS ${index + 1}`}
              image="https://rcclin.cl/wp-content/uploads/2021/12/turbo-timer-apexi.jpg"
              price={`$${(index + 1) * 25}`}
              quality={`Calidad ${index + 1}`}
              description={`Descripción del producto ${index + 1}`}
              onAgregarCarrito={(producto) => handleAgregarCarrito(producto)}
              // Puedes pasar propiedades específicas para cada card
              // Ejemplo: title="Producto 1", image="ruta_de_imagen", price="$20", etc.
            />
          </Col>
        ))}
      </Row>
      <Footer />
    </Container>
  );
};

export default ProductoCompras;
