import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifycontetnt: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">
            copyright &copy; 2022 AstroMALEK AB. All rights reserved 
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
