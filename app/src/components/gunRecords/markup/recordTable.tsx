import React from "react";
import Table from "react-table";
import ViewRecord from "./viewRecord";
import * as types from "../../../store/types";

type props = {
  guns: types.gun[];
};

const RecordTable = (props: props) => {
  console.log(props.guns);
  return <div />;
};

export default RecordTable;
