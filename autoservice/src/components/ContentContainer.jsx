import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";

const ContentContainer = ({ children }) => {
  return (
    <>
      <Container xs={12}>
        <Navbar />
        {children}
        <img
          src="https://cdn.sanity.io/images/n5z5pg8m/production/d394f28a39b9eb0ea1ecfbc90fe41fe7014fc856-1200x800.jpg?rect=0,100,1200,600&w=992&h=496&fit=crop&auto=format"
          alt="Foto Portada"
          className="img-fluid"
          style={{ width: "100%", objectFit: "cover" }} // Añadido para asegurar que la imagen se expanda al 100% del ancho
        />
        <Section />
        <Footer />
      </Container>
    </>
  );
};

export default ContentContainer;
