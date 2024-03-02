import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import ContentContainer from "./components/ContentContainer";
import Login from "./components/Login";
import RegistroUsuario from "./components/RegistroUsuario";
import CarritoCompras from "./components/CarritoCompras";
import ProductoCompras from "./components/ProductoCompras";
import ListadoCompras from "./components/ListadoCompras";
import PerfilUsuario from "./components/PerfilUsuario";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  // Función para manejar la compra y agregar productos al carrito
  const handleCompra = (producto) => {
    setProductosEnCarrito([...productosEnCarrito, producto]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContentContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/section" element={<Section />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route
          path="/carrito"
          element={<CarritoCompras productosEnCarrito={productosEnCarrito} />}
        />
        <Route
          path="/producto"
          element={<ProductoCompras onCompra={handleCompra} />}
        />
        <Route
          path="/listado"
          element={<ListadoCompras carrito={productosEnCarrito} />}
        />
        <Route path="/usuario" element={<PerfilUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
