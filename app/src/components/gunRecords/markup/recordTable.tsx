import React, { useState } from "react";
import Table from "react-table";
import ViewRecord from "./viewRecord";
import { Button } from "react-bootstrap";
import * as types from "../../../store/types";
import moment from "moment";

type props = {
  guns: types.gun[];
  updateRecord: (updateObj: { spID: number; postedNCIC: "Yes" | "No" }) => void;
};

type record = types.gun;

const RecordTable = (props: props) => {
  const [selectedRecord, viewRecord] = useState<record>(undefined);
  const columns = [
    {
      Header: "",
      accessor: "spID",
      Cell: i => (
        <Button
          block
          variant="secondary"
          onClick={() => viewRecord(i.original)}
        >
          View record
        </Button>
      )
    },
    {
      Header: "Submitted to NCIC",
      accessor: "postedNCIC",
      Cell: i => (
        <Button
          block
          variant={i.value == "Yes" ? "success" : "danger"}
          onClick={() =>
            props.updateRecord({
              spID: i.original.spID,
              postedNCIC: i.value == "Yes" ? "No" : "Yes"
            })
          }
        >
          {i.value}
        </Button>
      )
    },
    {
      Header: "Make",
      accessor: "gunMake"
    },
    {
      Header: "Model",
      accessor: "gunModel"
    },
    {
      Header: "Date Recovered",
      accessor: "dateOfRecovery"
    },
    {
      Header: "Record Created",
      accessor: "created"
    },
    {
      Header: "Created By",
      accessor: "createdBy"
    }
  ];

  return (
    <div>
      <Table
        data={props.guns.sort(
          (a, b) =>
            +new Date(
              moment(b.created, "MM-DD-YYYY h:m A").format(
                "YYYY-MM-DD HH:mm:ss"
              )
            ) -
            +new Date(
              moment(a.created, "MM-DD-YYYY h:m A").format(
                "YYYY-MM-DD HH:mm:ss"
              )
            )
        )}
        columns={columns}
        loading={false}
        minRows={0}
        pageSize={50}
        showPageSizeOptions={false}
        noDataText=""
      />
      {selectedRecord && (
        <ViewRecord gun={selectedRecord} viewRecord={viewRecord} />
      )}
    </div>
  );
};

export default RecordTable;
