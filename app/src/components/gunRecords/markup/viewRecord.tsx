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
              {g.serialNumber ? (
                <b style={fontSize}>{g.serialNumber}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Gun Make (MAK)</u>
              <br />
              {g.gunMake ? <b style={fontSize}>{g.gunMake}</b> : <i>null</i>}
            </div>
            <div>
              <u>Model (MOD)</u>
              <br />
              {g.gunModel ? <b style={fontSize}>{g.gunModel}</b> : <i>null</i>}
            </div>
            <div>
              <u>Caliber (CAL)</u>
              <br />
              {g.gunCaliber ? (
                <b style={fontSize}>{g.gunCaliber}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Date of Recover (DOR)</u>
              <br />
              {g.dateOfRecovery ? (
                <b style={fontSize}>{g.dateOfRecovery}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Originating Agency Case Number (OCA)</u>
              <br />
              {g.originatingAgencyCaseNumber ? (
                <b style={fontSize}>{g.originatingAgencyCaseNumber}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Linkage Agency Identifier (LKI)</u>
              <br />
              {g.linkageAgencyIdentifier ? (
                <b style={fontSize}>{g.linkageAgencyIdentifier}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Linkage Agency Case Number (LKA)</u>
              <br />
              {g.linkageAgencyCaseNumber ? (
                <b style={fontSize}>{g.linkageAgencyCaseNumber}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Notify Originating Agency (NOA)</u>
              <br />
              {g.notifyOriginatingAgency ? (
                <b style={fontSize}>{g.notifyOriginatingAgency}</b>
              ) : (
                <i>null</i>
              )}
            </div>
          </Col>
          <Col md={6}>
            <div>
              <u>Miscellaneous (MIS)</u>
              <br />
              {g.miscellaneous ? (
                <b style={fontSize}>{g.miscellaneous}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Name (NAM)</u>
              <br />
              {g.name ? <b style={fontSize}>{g.name}</b> : <i>null</i>}
            </div>
            <div>
              <u>Date of Birth (DOB)</u>
              <br />
              {g.dateOfBirth ? (
                <b style={fontSize}>{g.dateOfBirth}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Operators License Number (OLN)</u>
              <br />
              {g.operatorsLicenseNumber ? (
                <b style={fontSize}>{g.operatorsLicenseNumber}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>License State (OLS)</u>
              <br />
              {g.licenseState ? (
                <b style={fontSize}>{g.licenseState}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Possessed by Prohibited Person (PPP)</u>
              <br />
              {g.possessedByProhibitedPerson ? (
                <b style={fontSize}>{g.possessedByProhibitedPerson}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Charged with Crime (CHC)</u>
              <br />
              {g.chargedWithCrime ? (
                <b style={fontSize}>{g.chargedWithCrime}</b>
              ) : (
                <i>null</i>
              )}
            </div>
            <div>
              <u>Permit in LTC (LTC)</u>
              <br />
              {g.permitInLTC ? (
                <b style={fontSize}>{g.permitInLTC}</b>
              ) : (
                <i>null</i>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default ViewRecord;
