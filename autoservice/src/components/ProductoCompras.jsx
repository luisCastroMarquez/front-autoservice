import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductosContext } from "../context/ProductosContext";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Nav,
  Button,
} from "react-bootstrap";
import { FaShoppingCart, FaShoppingBasket, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importa useNavigate
import Card from "./Card";
import Footer from "./Footer";

const ProductoCompras = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const { id } = useParams();
  const { dataProductos, addToCart } = useProductosContext();
  const [dataProducto, setDataProducto] = useState({});

  useEffect(() => {
    const data = dataProductos.find((producto) => producto.id === id);
    console.log("el objeto essssss: " + data);
    console.log("pero el id essssss: " + id);

    setDataProducto(data);
  }, [dataProductos, id]);

  // Agrega al carro la producto
  const handleAddToCartClick = (producto) => {
    addToCart(producto);
  };

  const handlePaginaAnterior = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePaginaSiguiente = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

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
        <Col
          xs={2}
          className="d-flex justify-content-end align-items-center gap-4"
        >
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
      <Col xs={8} className="">
        {/* Asegúrate de que productos esté definido y no esté vacío antes de pasar el producto */}
        {dataProductos.length > 0 && (
          <>
            <Row className="m-5">
              <Col xs={6}>
                {dataProducto && (
                  <img
                    src={dataProducto.imagen}
                    alt="Producto"
                    className="img-fluid"
                  />
                )}
              </Col>
              <Col xs={6}>
                {dataProducto && (
                  <>
                    <h1>{dataProducto.nombre}</h1>
                    <p>
                      <strong>{dataProducto.descripcion}</strong>
                    </p>
                    <p>
                      <strong>Precio: ${dataProducto.precio}</strong>
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
                        value={`$${dataProducto.precio}`}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup>
                        <InputGroup.Text>Cantidad</InputGroup.Text>
                      </InputGroup>
                      <Form.Control id="cantidad" type="number" value={1} />
                    </InputGroup>
                    <InputGroup xs={6} className="mb-3 gap-4">
                      <Button
                        variant="primary"
                        onClick={handleAddToCartClick(dataProducto)}
                      >
                        Agregar al Carrito
                      </Button>
                      <Button variant="success">Comprar producto</Button>
                      <Link to="/carrito">
                        <Button variant="secondary" className="mediumbutton">
                          Volver Atras
                        </Button>
                      </Link>
                    </InputGroup>
                  </>
                )}
              </Col>
            </Row>
          </>
        )}
      </Col>

      {/* Cards */}
      <h3>Otros Porductos</h3>

      <Row className="d-flex flex-wrap justify-content-center gap-4 bg-light">
        {dataProductos
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((producto) => (
            <Col
              key={producto.id}
              className="d-flex justify-content-center m-3"
              style={{ filter: "drop-shadow(2px 4px 6px black)" }}
            >
              <Card key={producto.id} dataProducto={producto} />
            </Col>
          ))}
      </Row>
      {/* Botones de paginación */}
      <Col className="d-flex justify-content-center m-4 gap-4">
        <Button onClick={handlePaginaAnterior} disabled={currentPage === 1}>
          Anterior
        </Button>
        <span>
          Página {currentPage} de {pageSize}
        </span>
        <Button
          onClick={handlePaginaSiguiente}
          disabled={currentPage === pageSize}
        >
          Siguiente
        </Button>
      </Col>
      <Footer />
    </Container>
  );
};

export default ProductoCompras;
