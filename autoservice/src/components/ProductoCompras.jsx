import React, { useState } from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { FaShoppingCart, FaShoppingBasket, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importa Link
import Card from "./Card"; // Asegúrate de importar o crear el componente Card
import Footer from "./Footer";

const ProductoCompras = () => {
  const [total, setTotal] = useState("$0.00");

  const handleCantidadChange = (event) => {
    // Lógica para manejar cambios en la cantidad y actualizar el total
    const nuevaCantidad = event.target.value;
    const nuevoTotal = `$${nuevaCantidad * 100}`; // Suponiendo un precio base de $100
    setTotal(nuevoTotal);
  };

  return (
    <Container className="mt-5">
      {/* Barra superior */}
      <Row className="d-flex align-items-center">
        <Col xs={2} className="d-flex justify-content-center">
          <img src="ruta_del_logo" alt="Logo" className="img-fluid" />
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
            <Form.Control
              type="text"
              readOnly
              value={total}
              onChange={handleCantidadChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup>
              <InputGroup.Text>Cantidad</InputGroup.Text>
            </InputGroup>
            <Form.Control
              type="number"
              value="1"
              onChange={handleCantidadChange}
            />
          </InputGroup>
          <Button variant="primary" className="mr-3">
            Agregar al Carrito
          </Button>
          <Button variant="success">Verificar Compra</Button>
        </Col>
      </Row>

      {/* Cards */}

      <Row className="mt-4 bg-light">
        <h3>Otros Accesorios</h3>
        {[...Array(4)].map((_, index) => (
          <Col key={index} xs={3} className="mb-4">
            <Card
              title={`Turbo Timer HKS ${index + 1}`}
              image="https://rcclin.cl/wp-content/uploads/2021/12/turbo-timer-apexi.jpg"
              price={`$${(index + 1) * 25}`}
              quality={`Calidad ${index + 1}`}
              description={`Descripción del producto ${index + 1}`}
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
