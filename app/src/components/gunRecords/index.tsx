import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import HydrateStore from "../utilities/hydrateStore";
import { Container, Col, Row, Image } from "react-bootstrap";
import * as guns from "../../store/guns";
import * as user from "../../store/user";
import * as types from "../../store/types";
import AddButton from "./markup/addButton";
import RecordTable from "./markup/recordTable";

type props = {
  guns: types.gun[];
  user: types.user;
};

const GunRecords = (props: props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateRecord = () => {

  }

  return (
    <Container>
      <HydrateStore />
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <AddButton />
          <RecordTable/>
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
)(GunRecords);
