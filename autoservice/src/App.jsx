import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import ContentContainer from "./components/ContentContainer";
import Login from "./components/Login"; // Nuevo componente de inicio de sesión
import RegistroUsuario from "./components/RegistroUsuario"; // Nuevo componente de inicio de sesión

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ContentContainer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/section" element={<Section />} />
          <Route path="/usuario" element={<RegistroUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
