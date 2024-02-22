import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Section = () => {
  return (
    <Container className="d-flex justify-content-center flex ">
      <Row style={{ flexWar: "wrap", alignItems: "center" }}>
        <Col>
          <img
            src="https://i.pinimg.com/564x/fa/92/a7/fa92a78bb35bc997ab4566f14cd16d01.jpg"
            alt="Foto Auto"
            className="img-fluid" // Agregamos la clase img-fluid para hacer la imagen responsiva
            style={{ width: "w-100" }} // Establecemos el ancho máximo de la imagen al 100%
          />
        </Col>
        <Col>
          <div>
            <h2>¿Qué es un taller automotriz multimarca?</h2>
            <p>
              Un taller automotriz multimarca es mucho más que un simple lugar
              de reparación de autos. Se trata de un centro especializado capaz
              de atender una amplia variedad de marcas y modelos. Su
              infraestructura está equipada con la tecnología más avanzada y su
              personal altamente capacitado puede manejar vehículos de
              diferentes marcas, brindando a sus clientes la comodidad de
              encontrar todos los servicios que necesitan en un solo lugar. El
              mantenimiento preventivo es esencial para garantizar un
              rendimiento óptimo a lo largo del tiempo. Por ello, estos talleres
              ofrecen servicios de cambio de aceite, revisión de frenos,
              alineación y balanceo, y otras medidas preventivas que ayudan a
              evitar problemas costosos a futuro.¿Qué es un taller automotriz
              multimarca? Un taller automotriz multimarca es mucho más que un
              simple lugar de reparación de autos. Se trata de un centro
              especializado capaz de atender una amplia variedad de marcas y
              modelos. Su infraestructura está equipada con la tecnología más
              avanzada y su personal altamente capacitado puede manejar
              vehículos de diferentes marcas, brindando a sus clientes la
              comodidad de encontrar todos los servicios que necesitan en un
              solo lugar. El mantenimiento preventivo es esencial para
              garantizar un rendimiento óptimo a lo largo del tiempo. Por ello,
              estos talleres ofrecen servicios de cambio de aceite, revisión de
              frenos, alineación y balanceo, y otras medidas preventivas que
              ayudan a evitar problemas costosos a futuro.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
