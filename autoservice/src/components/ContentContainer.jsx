import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";

const ContentContainer = ({ children }) => {
  return (
    <>
      <Container className="d-flex justify-content-center flex-column flex-direction-row">
        <Navbar />
        {children}
        <img
          src="https://i.pinimg.com/564x/4e/46/f8/4e46f8a3d9a221d41f5def71fcdce9aa.jpg"
          alt="Foto Portada"
          className="img-fluid"
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Añadido para asegurar que la imagen se expanda al 100% del ancho
        />
        <Section />
        <Footer />
      </Container>
    </>
  );
};

export default ContentContainer;
