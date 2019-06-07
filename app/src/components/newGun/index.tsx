import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { Container, Row } from "react-bootstrap";
import * as guns from "../../store/guns";
import * as messages from "../../store/messages";
import * as user from "../../store/user";
import * as types from "../../store/types";
import Form from "./markup/form";
import Submit from "./markup/submit";
import moment from "moment";

type props = {
  guns: types.gun[];
  newGun: (gun: types.gun) => number;
  user: types.user;
  error: () => void;
};

type state = types.gun;

export class NewGun extends React.Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      spID: undefined,
      serialNumber: "",
      gunMake: "",
      gunModel: "",
      gunCaliber: "",
      dateOfRecovery: "",
      gunType: "",
      originatingAgencyCaseNumber: "",
      linkageAgencyIdentifier: "",
      linkageAgencyCaseNumber: "",
      notifyOriginatingAgency: "",
      miscellaneous: "",
      name: "",
      dateOfBirth: "",
      operatorsLicenseNumber: "",
      licenseState: "",
      possessedByProhibitedPerson: "",
      chargedWithCrime: "",
      permitInLTC: "",
      createdBy: props.user.name,
      created: moment().format("MM-DD-YYYY, hh:mm A"),
      postedNCIC: "No",
      redirect: undefined
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ createdBy: nextProps.user.name });
  }

  async post() {
    const status = await this.props.newGun(this.state);
    if (status == 500) {
      this.props.error();
    }
    this.setState({ redirect: true });
  }

  public render() {
    if (this.state.redirect == true) {
      return <Redirect push to="/" />;
    }
    return (
      <Container style={{ marginTop: "20px", marginBottom: "100px" }}>
        <Row>
          <Form setState={this.setState.bind(this)} gun={this.state} />
          <Submit gun={this.state} post={this.post.bind(this)} />
        </Row>
      </Container>
    );
  }
}

export default connect(
  (state: ApplicationState) => ({
    ...state.user,
    ...state.guns,
    ...state.messages
  }),
  {
    ...user.actionCreators,
    ...guns.actionCreators,
    ...messages.actionCreators
  }
)(NewGun);
