import React from "react";
import { Container, Button, Col } from "react-bootstrap";
import * as types from "../../../store/types";

type props = {
  gun: types.gun;
  post: () => void;
};

const Submit = (props: props) => {
  // form validation
  const populatedFields = Object.keys(props.gun).filter(
    x => props.gun[x] != "" && props.gun[x] != undefined
  );
  // enable submit button when atleast 4 fields are populated
  // created, createdBy, and postedNCIC by default
  // then, atleast one more
  const isEnabled = populatedFields.length > 3;
  return (
    <Container style={{ marginTop: "40px" }}>
      <Col md={{ span: 10, offset: 1 }} sm={12}>
        <Button
          variant="success"
          size="lg"
          block
          disabled={!isEnabled}
          onClick={() => props.post()}
        >
          Save Record
        </Button>
      </Col>
    </Container>
  );
};

export default Submit;
