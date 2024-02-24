import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import ContentContainer from "./components/ContentContainer";
import Login from "./components/Login"; // Nuevo componente de inicio de sesión
import RegistroUsuario from "./components/RegistroUsuario"; // Nuevo registro de usuario
import CarritoCompras from "./components/CarritoCompras"; // Nuevo registro de compra
import ProductoCompras from "./components/ProductoCompras";
import PerfilUsuario from "./components/PerfilUsuario";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContentContainer />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/section" element={<Section />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/carrito" element={<CarritoCompras />} />
        <Route path="/producto" element={<ProductoCompras />} />
        <Route path="/usuario" element={<PerfilUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
