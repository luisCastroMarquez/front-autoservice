import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Nav,
} from "react-bootstrap";
import { FaShoppingCart, FaShoppingBasket, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importa Link
import Card from "./Card"; // Asegúrate de importar o crear el componente Card
import Footer from "./Footer";

const CarritoCompras = () => {
  //lista de productos
  const productos = [
    { id: 1, nombre: "Producto 1", precio: 20 },
    { id: 2, nombre: "Producto 2", precio: 30 },
    // ... otros productos en el carrito
  ];

  const handleAgregarCarrito = (producto) => {
    // Lógica para agregar al carrito, utilizar un estado global o contexto
    console.log("Producto agregado al carrito:", producto);

    // Limpiar el mensaje después de 3 segundos
    setTimeout(() => {
    }, 2500);
  };

  return (
    <Container>
      {/* Barra superior */}
      <Row className="d-flex align-items-center">
        <Col xs={2} className="d-flex justify-content-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/384/813/small/car-service-logo-design-illustration-car-repair-logo-vector.jpg"
            alt="Auto Service"
            className="img-fluid "
          />
        </Col>
        <Col xs={8}>
          <InputGroup>
            <Form.Control type="text" placeholder="Buscar en el carrito" />
            <InputGroup className="ml-auto d-flex justify-content-center">
              <Nav className="ml-auto">
                <Nav.Link href="/#home" style={{ color: "black" }}>
                  Inicio
                </Nav.Link>
                <Nav.Link href="/carrito" style={{ color: "black" }}>
                  Nuestros Servicios
                </Nav.Link>
                <Nav.Link href="#contact" style={{ color: "black" }}>
                  Contactanos
                </Nav.Link>
                <Nav.Link href="#taller" style={{ color: "black" }}>
                  Taller Mecanico
                </Nav.Link>
              </Nav>
            </InputGroup>
          </InputGroup>
        </Col>
        <Col xs={2} className="d-flex justify-content-center gap-4">
          <Link to="/login">
            <FaUser className="mr-3" style={{ fontSize: "200%" }} />
          </Link>
          <Link to="/carrito">
            <FaShoppingBasket className="mr-3" style={{ fontSize: "200%" }} />
          </Link>
          <Link to="/listado">
            <FaShoppingCart className="mr-3" style={{ fontSize: "200%" }} />
          </Link>
        </Col>
      </Row>

      {/* Contenido principal */}
      <Row className="d-flex align-items-center bg-light">
        <Col
          xs={6}
          className="d-flex align-items-center flex-wrap justify-content-evenly gap-2"
        >
          <h1>Producto Especial</h1>
          <h5>Un turbocompresor Garrett.</h5>
          <p>
            Es un sistema de sobrealimentación que comprime el aire,
            posibilitando que el motor reciba más oxígeno para realizar la
            mezcla con el combustible.
          </p>
          <Link to="/producto">
            <Button variant="primary" className="mr-3" >
              Comprar Ahora
            </Button>
          </Link>
          <Button variant="secondary">Aprender más</Button>
        </Col>
        <Col
          xs={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src="https://i.pinimg.com/564x/b9/2e/b6/b92eb668712d30b0f54e8c87c962fb66.jpg"
            alt="Imagen"
            className="img-fluid"
            style={{ filter: "drop-shadow(2px 4px 6px black)", width: "60%" }}
          />
        </Col>
      </Row>

      {/* Cards */}
      <h3>Accesorios</h3>

      <Row className="d-flex flex-row justify-content-center gap-1">
        {[...Array(8)].map((_, index) => (
          <Col
            key={index}
            className="d-flex justify-content-center"
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
          >
            <Card
              title={`Reloj P. de Turbo ${index + 1}`}
              image="https://nolimit.ua/content/images/9/480x480l50nn0/innovate-mtx-l-plus-shpl-zond-kabel-240-sm-69885348339333.jpg"
              price={`$${(index + 1) * 10}`}
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

export default CarritoCompras;
