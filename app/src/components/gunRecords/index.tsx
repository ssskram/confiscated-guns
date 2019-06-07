import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import HydrateStore from "../utilities/hydrateStore";
import { Container, Col, Row } from "react-bootstrap";
import * as guns from "../../store/guns";
import * as user from "../../store/user";
import * as types from "../../store/types";
import AddButton from "./markup/addButton";
import RecordTable from "./markup/recordTable";
import Messages from "../utilities/messages";
import Spinner from "../utilities/spinner";

type props = {
  guns: types.gun[];
  updateRecord: (updateObj: { spID: number; postedNCIC: "Yes" | "No" }) => void;
  user: types.user;
};

const GunRecords = (props: props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <HydrateStore />
      <Row>
        <Col md={12}>
          <Messages />
          <AddButton />
          {props.guns.length > 0 ? (
            <RecordTable guns={props.guns} updateRecord={props.updateRecord} />
          ) : (
            <Spinner notice="...loading gun records..." />
          )}
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
