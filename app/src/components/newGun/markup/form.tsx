import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import * as types from "../../../store/types";
import Input from "../../formElements/input";
import Select from "../../formElements/select";
import TextArea from "../../formElements/textarea";
import Cleave from "../../formElements/cleave";

type props = {
  setState: (state: object) => void;
  gun: types.gun;
};

const Form = (props: props) => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h2>Gun</h2>
          <hr />
          <Input
            value={props.gun.serialNumber}
            placeholder="Serial number"
            header="Serial number"
            required={false}
            callback={e => props.setState({ serialNumber: e.target.value })}
          />
          <Input
            value={props.gun.gunMake}
            placeholder="Make of gun"
            header="Make"
            required={false}
            callback={e => props.setState({ gunMake: e.target.value })}
          />
          <Input
            value={props.gun.gunModel}
            placeholder="Model of gun"
            header="Model"
            required={false}
            callback={e => props.setState({ gunModel: e.target.value })}
          />
          <Input
            value={props.gun.gunCaliber}
            placeholder="Caliber of gun"
            header="Caliber"
            required={false}
            callback={e => props.setState({ gunCaliber: e.target.value })}
          />
          <Input
            value={props.gun.gunType}
            placeholder="Type of gun"
            header="Type"
            required={false}
            callback={e => props.setState({ gunType: e.target.value })}
          />
        </Col>
        <Col md={4}>
          <h2>Case</h2>
          <hr />
          <Cleave
            value={props.gun.dateOfRecovery}
            placeholder="Enter date"
            header="Date of recovery"
            required={false}
            callback={e => props.setState({ dateOfRecovery: e.target.value })}
            options={{ creditCard: true }}
          />
          <Input
            value={props.gun.originatingAgencyCaseNumber}
            placeholder="Case number"
            header="Originating agency case number"
            required={false}
            callback={e =>
              props.setState({ originatingAgencyCaseNumber: e.target.value })
            }
          />
          <Input
            value={props.gun.linkageAgencyIdentifier}
            placeholder="Agency identifier"
            header="Linkage agency identifier"
            required={false}
            callback={e =>
              props.setState({ linkageAgencyIdentifier: e.target.value })
            }
          />
          <Input
            value={props.gun.linkageAgencyCaseNumber}
            placeholder="Case number"
            header="Linkage agency case number"
            required={false}
            callback={e =>
              props.setState({ linkageAgencyCaseNumber: e.target.value })
            }
          />
          <Input
            value={props.gun.linkageAgencyCaseNumber}
            placeholder="Case number"
            header="Linkage agency case number"
            required={false}
            callback={e =>
              props.setState({ linkageAgencyCaseNumber: e.target.value })
            }
          />
          <Select
            value={
              props.gun.notifyOriginatingAgency
                ? {
                    value: props.gun.notifyOriginatingAgency,
                    label: props.gun.notifyOriginatingAgency
                  }
                : undefined
            }
            placeholder="Yes or no"
            header="Notify originating agency"
            required={false}
            multi={false}
            onChange={e => props.setState({ notifyOriginatingAgency: e.value })}
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" }
            ]}
          />
        </Col>
        <Col md={4}>
          <h2>Individual</h2>
          <hr />
          <Input
            value={props.gun.name}
            placeholder="Enter name"
            header="Name"
            required={false}
            callback={e => props.setState({ name: e.target.value })}
          />
          <Cleave
            value={props.gun.dateOfBirth}
            placeholder="Enter date"
            header="Date of birth"
            required={false}
            callback={e => props.setState({ dateOfBirth: e.target.value })}
            options={{ creditCard: true }}
          />
          <Input
            value={props.gun.operatorsLicenseNumber}
            placeholder="License number"
            header="Operators license number"
            required={false}
            callback={e =>
              props.setState({ operatorsLicenseNumber: e.target.value })
            }
          />
          <Select
            value={
              props.gun.possessedByProhibitedPerson
                ? {
                    value: props.gun.possessedByProhibitedPerson,
                    label: props.gun.possessedByProhibitedPerson
                  }
                : undefined
            }
            placeholder="Yes or no"
            header="Possessed by prohibited person"
            required={false}
            multi={false}
            onChange={e =>
              props.setState({ possessedByProhibitedPerson: e.value })
            }
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" }
            ]}
          />
          <Select
            value={
              props.gun.chargedWithCrime
                ? {
                    value: props.gun.chargedWithCrime,
                    label: props.gun.chargedWithCrime
                  }
                : undefined
            }
            placeholder="Yes or no"
            header="Charged with a crime"
            required={false}
            multi={false}
            onChange={e => props.setState({ chargedWithCrime: e.value })}
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" }
            ]}
          />
          <Select
            value={
              props.gun.permitInLTC
                ? {
                    value: props.gun.permitInLTC,
                    label: props.gun.permitInLTC
                  }
                : undefined
            }
            placeholder="Yes or no"
            header="Permit in LTC"
            required={false}
            multi={false}
            onChange={e => props.setState({ permitInLTC: e.value })}
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" }
            ]}
          />
        </Col>
        <Col md={12}>
          <TextArea
            value={props.gun.miscellaneous}
            placeholder="Other information"
            header="Miscellaneous"
            required={false}
            callback={e => props.setState({ miscellaneous: e.target.value })}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
