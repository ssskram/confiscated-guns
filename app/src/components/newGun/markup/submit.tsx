import React from "react";
import { Container, Button, Col } from "react-bootstrap";

const Submit = () => {
  return (
    <Container>
      <Col md={{ span: 10, offset: 1 }} sm={12}>
        <Button variant="success" size="lg" block>
          Save Record
        </Button>
      </Col>
    </Container>
  );
};

export default Submit;
