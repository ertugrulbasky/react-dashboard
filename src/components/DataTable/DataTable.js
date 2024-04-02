import { Table } from "antd";
import React from "react";

const DataTable = (props) => (
  <Table dataSource={props.dataSource} columns={props.columns} />
);
export default DataTable;
