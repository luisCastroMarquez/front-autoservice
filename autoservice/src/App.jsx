import React, { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import ContentContainer from "./components/ContentContainer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistroUsuario from "./components/RegistroUsuario";
import ListaProductos from "./components/ListaProductos";
import ProductoCompras from "./components/ProductoCompras";
import ListadoCompras from "./components/ListadoCompras";
import PerfilUsuarios from "./components/perfil/PerfilUsuarios";
import PerfilGaleria from "./components/perfil/PerfilGaleria";
import { UserIdProvider } from "./context/UserIdProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import { ProductoProvider } from "./context/ProductosContext";

const App = () => {
  return (
    <>
      <ProductoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<ContentContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<RegistroUsuario />} />
            <Route path="/usuarios" element={<PerfilUsuarios />} />
            <Route
              path="/galeria"
              element={
                <UserIdProvider>
                  <PerfilGaleria />
                </UserIdProvider>
              }
            />
            <Route path="/productos" element={<ListaProductos />} />
            <Route path="/producto/:id" element={<ProductoCompras />} />
            <Route path="/listado" element={<ListadoCompras />} />
            <Route path="*" element={<Navigate replace to="/home/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductoProvider>
    </>
  );
};

export default App;
