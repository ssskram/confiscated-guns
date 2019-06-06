import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import HydrateStore from "../utilities/hydrateStore";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import * as guns from "../../store/guns";
import * as user from "../../store/user";
import * as types from "../../store/types";
const gun = require("../../images/gun.png");

type props = {
  guns: types.gun[];
  user: types.user;
};

const Home = (props: props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <HydrateStore />
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Link to="/NewGun">
            <Button size="lg" variant="warning">
              <Image
                src={gun}
                style={{
                  marginRight: "15px",
                  height: "30px"
                }}
              />
              Add confiscated gun
            </Button>
          </Link>
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
