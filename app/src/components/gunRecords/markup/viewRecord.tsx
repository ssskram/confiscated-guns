import React from "react";
import Modal from "react-responsive-modal";
import * as types from "../../../store/types";
import { Container, Row, Col } from "react-bootstrap";

type props = {
  gun: types.gun;
  viewRecord: (value: types.gun | undefined) => void;
};

const fontSize = {
  fontSize: "1.2em"
};

const ViewRecord = (props: props) => {
  const g = props.gun;
  return (
    <Modal
      open={true}
      onClose={() => props.viewRecord(undefined)}
      classNames={{
        overlay: "custom-overlay",
        modal: "custom-modal"
      }}
      showCloseIcon={true}
      center
    >
      <Container
        style={{ color: "black", lineHeight: "1.5" }}
        className="ubuntu"
      >
        <h3 className="text-center" style={{ color: "black" }}>
          Full Record
        </h3>
        <Row>
          <Col md={6}>
            <div>
              <u>Serial Number (SER)</u>
              <br />
              <b style={fontSize}>{g.serialNumber}</b>
            </div>
            <div>
              <u>Gun Make (MAK)</u>
              <br />
              <b style={fontSize}>{g.gunMake}</b>
            </div>
            <div>
              <u>Model (MOD)</u>
              <br />
              <b style={fontSize}>{g.gunModel}</b>
            </div>
            <div>
              <u>Caliber (CAL)</u>
              <br />
              <b style={fontSize}>{g.gunCaliber}</b>
            </div>
            <div>
              <u>Date of Recover (DOR)</u>
              <br />
              <b style={fontSize}>{g.dateOfRecovery}</b>
            </div>
            <div>
              <u>Originating Agency Case Number (OCA)</u>
              <br />
              <b style={fontSize}>{g.originatingAgencyCaseNumber}</b>
            </div>
            <div>
              <u>Linkage Agency Identifier (LKI)</u>
              <br />
              <b style={fontSize}>{g.linkageAgencyIdentifier}</b>
            </div>
            <div>
              <u>Linkage Agency Case Number (LKA)</u>
              <br />
              <b style={fontSize}>{g.linkageAgencyCaseNumber}</b>
            </div>
            <div>
              <u>Notify Originating Agency (NOA)</u>
              <br />
              <b style={fontSize}>{g.notifyOriginatingAgency}</b>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <u>Miscellaneous (MIS)</u>
              <br />
              <b style={fontSize}>{g.miscellaneous}</b>
            </div>
            <div>
              <u>Name (NAM)</u>
              <br />
              <b style={fontSize}>{g.name}</b>
            </div>
            <div>
              <u>Date of Birth (DOB)</u>
              <br />
              <b style={fontSize}>{g.dateOfBirth}</b>
            </div>
            <div>
              <u>Operators License Number (OLN)</u>
              <br />
              <b style={fontSize}>{g.operatorsLicenseNumber}</b>
            </div>
            <div>
              <u>License State (OLS)</u>
              <br />
              <b style={fontSize}>{g.licenseState}</b>
            </div>
            <div>
              <u>Possessed by Prohibited Person (PPP)</u>
              <br />
              <b style={fontSize}>{g.possessedByProhibitedPerson}</b>
            </div>
            <div>
              <u>Charged with Crime (CHC)</u>
              <br />
              <b style={fontSize}>{g.chargedWithCrime}</b>
            </div>
            <div>
              <u>Permit in LTC (LTC)</u>
              <br />
              <b style={fontSize}>{g.permitInLTC}</b>
            </div>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default ViewRecord;
