import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
