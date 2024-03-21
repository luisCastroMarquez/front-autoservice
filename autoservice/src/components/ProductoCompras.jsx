import React, { useState, useEffect } from "react";
import DetalleProducto from "./DetalleProducto";
import { ProductIdProvider } from "../context/ProductIdContext"; // Importa el ProductIdProvider
import axios from "axios";
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
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import Card from "./Card";
import Footer from "./Footer";

const ProductoCompras = ({ onCompra }) => {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const navigate = useNavigate();
  const [productoSeleccionado, setProductoSeleccionado] = useState();

  // Cuando se selecciona un producto
  const handleProductoSeleccionado = (producto) => {
    setProductoSeleccionado(producto);
  };

  useEffect(() => {
    obtenerProductos(currentPage);
  }, [currentPage]);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/productos", {});
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const handlePaginaAnterior = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePaginaSiguiente = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleAgregarCarrito = (producto) => {
    // Lógica para agregar al carrito, utilizar un estado global o contexto
    // Lógica para agregar al carrito
    onCompra(producto);
    console.log("Producto agregado al carrito:", producto);

    // Limpiar el mensaje después de 3 segundos
    setTimeout(() => {}, 2500);
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
      <ProductIdProvider>
        <Col xs={8} className="">
          {/* Asegúrate de que productos esté definido y no esté vacío antes de pasar el producto */}
          {productos.length > 0 && (
            <>
              <DetalleProducto
                setProductoSeleccionado={setProductoSeleccionado}
                onSeleccionarProducto={handleProductoSeleccionado}
              />
            </>
          )}
        </Col>
      </ProductIdProvider>

      {/* Cards */}
      <h3>Otros Porductos</h3>

      <Row className="d-flex flex-wrap justify-content-center gap-4 bg-light">
        {productos
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((producto) => (
            <Col
              key={producto.id}
              className="d-flex justify-content-center m-3"
              style={{ filter: "drop-shadow(2px 4px 6px black)" }}
            >
              <Card
                key={producto.id}
                title={producto.nombre}
                image={producto.imagen}
                price={`$${producto.precio}`}
                description={producto.descripcion}
                onAgregarCarrito={() => handleAgregarCarrito(producto)}
              />
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
