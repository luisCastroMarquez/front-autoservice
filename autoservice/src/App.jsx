import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import ContentContainer from "./components/ContentContainer";
import Login from "./components/Login";
import RegistroUsuario from "./components/RegistroUsuario";
import CarritoCompras from "./components/CarritoCompras";
import ProductoCompras from "./components/ProductoCompras";
import ListadoCompras from "./components/ListadoCompras";
import PerfilUsuarios from "./components/PerfilUsuarios";
import PerfilGaleria from "./components/PerfilGaleria";
import { UserIdProvider } from "./context/UserIdProvider";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  const [usuarioActual, setUsuarioActual] = useState({
    id: "",
    nombre: "",
  });

  // Función para actualizar el estado del usuario
  const actualizarUsuario = (nuevoUsuario) => {
    setUsuarioActual(nuevoUsuario);
  };

  // Función para manejar la compra y agregar productos al carrito
  const handleCompra = (producto) => {
    setProductosEnCarrito([...productosEnCarrito, producto]);
  };

  // Función para eliminar un producto específico del carrito
  const handleEliminarProducto = (productoId) => {
    // Filtrar los productos para excluir el que se desea eliminar
    const nuevoCarrito = productosEnCarrito.filter(
      (producto) => producto.id !== productoId
    );
    setProductosEnCarrito(nuevoCarrito);
  };

  // Función para editar la cantidad de un producto en el carrito
  const handleEditarCantidad = (productoId, nuevaCantidad) => {
    // Lógica para editar la cantidad del producto
    // ...

    // Después de editar, actualiza el estado del carrito
    setProductosEnCarrito(nuevoCarrito);
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
          element={
            <ListadoCompras
              carrito={productosEnCarrito}
              onEditarCantidad={handleEditarCantidad}
              onEliminarProducto={handleEliminarProducto}
            />
          }
        />
        <Route path="/usuarios" element={<PerfilUsuarios />} />
        <Route
          path="/galeria"
          element={
            <UserIdProvider>
              <PerfilGaleria />
            </UserIdProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
