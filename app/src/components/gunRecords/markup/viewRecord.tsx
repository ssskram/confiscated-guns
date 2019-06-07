import React from "react";
import Modal from "react-responsive-modal";
import * as types from "../../../store/types";
import { Container, Row, Col } from "react-bootstrap";
import copy from "copy-to-clipboard";
const copyIcon = require("../../../images/copy.png");

type props = {
  gun: types.gun;
  viewRecord: (value: types.gun | undefined) => void;
};

const fontSize = {
  fontSize: "1.2em"
};

const model = [
  { label: "Serial Number (SER)", field: "serialNumber" },
  { label: "Gun Make (MAK)", field: "gunMake" },
  { label: "Model (MOD)", field: "gunModel" },
  { label: "Caliber (CAL)", field: "gunCaliber" },
  { label: "Date of Recover (DOR)", field: "dateOfRecovery" },
  {
    label: "Originating Agency Case Number (OCA)",
    field: "originatingAgencyCaseNumber"
  },
  {
    label: "Linkage Agency Identifier (LKI)",
    field: "linkageAgencyIdentifier"
  },
  {
    label: "Linkage Agency Case Number (LKA)",
    field: "linkageAgencyCaseNumber"
  },
  {
    label: "Notify Originating Agency (NOA)",
    field: "notifyOriginatingAgency"
  },
  { label: "Miscellaneous (MIS)", field: "miscellaneous" },
  { label: "Name (NAM)", field: "name" },
  { label: "Date of Birth (DOB)", field: "dateOfBirth" },
  { label: "Operators License Number (OLN)", field: "operatorsLicenseNumber" },
  { label: "License State (OLS)", field: "licenseState" },
  {
    label: "Possessed by Prohibited Person (PPP)",
    field: "possessedByProhibitedPerson"
  },
  { label: "Charged with Crime (CHC)", field: "chargedWithCrime" },
  { label: "Permit in LTC (LTC)", field: "permitInLTC" }
];

const ViewRecord = (props: props) => {
  // slice model in half for UI
  const half = Math.floor(model.length / 2);
  const fh = model.slice(0, half);
  const sh = model.slice(half, model.length);

  const markup = (o, k) => {
    return (
      <div key={k}>
        <u>{o.label}</u>
        <div>
          {props.gun[o.field] ? (
            <div>
              <b style={fontSize}>{props.gun[o.field]}</b>
              <span>
                <button
                  title="Copy to clipboard"
                  style={{ float: "right" }}
                  onClick={() => copy(props.gun[o.field])}
                >
                  <img src={copyIcon} style={{ height: "15px" }} />
                </button>
              </span>
            </div>
          ) : (
            <i>null</i>
          )}
        </div>
      </div>
    );
  };

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
          <Col md={6}>{fh.map((o, k) => markup(o, k))}</Col>
          <Col md={6}>{sh.map((o, k) => markup(o, k))}</Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default ViewRecord;
