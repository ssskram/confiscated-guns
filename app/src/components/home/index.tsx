import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import HydrateStore from "../utilities/hydrateStore";
import { Container, Col, Row } from "react-bootstrap";
import * as guns from "../../store/guns";
import * as user from "../../store/user";
import * as types from "../../store/types";
import Form from "../demoForm";

type props = {
  guns: types.gun[];
  user: types.user;
};

const Home = (props: props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(props);
  });

  return (
    <Container>
      <HydrateStore />
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(
  (state: ApplicationState) => ({
    ...state.user,
    ...state.guns
  }),
  {
    ...user.actionCreators,
    ...guns.actionCreators
  }
)(Home);
