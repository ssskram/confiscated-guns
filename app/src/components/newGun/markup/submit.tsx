import React, { useState } from "react";
import { Container, Button, Col } from "react-bootstrap";
import * as types from "../../../store/types";
import Spinner from "../../utilities/spinner";

type props = {
  gun: types.gun;
  post: () => void;
};

type spinner = boolean;

const Submit = (props: props) => {
  const [spinner, throwSpinner] = useState<spinner>(false);

  // form validation
  const populatedFields = Object.keys(props.gun).filter(
    x => props.gun[x] != "" && props.gun[x] != undefined
  );
  // enable submit button when atleast 4 fields are populated
  // created, createdBy, and postedNCIC by default
  // then, atleast one more
  const isEnabled = populatedFields.length > 3;

  if (spinner) return <Spinner notice="...submitting the record..." />;

  return (
    <Container style={{ marginTop: "40px" }}>
      <Col md={{ span: 10, offset: 1 }} sm={12}>
        <Button
          variant="success"
          size="lg"
          block
          disabled={!isEnabled}
          onClick={() => {
            throwSpinner(true);
            props.post();
          }}
        >
          Save Record
        </Button>
      </Col>
    </Container>
  );
};

export default Submit;
