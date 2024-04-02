import { Button } from "antd";
import React from "react";

const CustomButton = (props) => (
  <Button onClick={props.onClick} className={props.className} type={props.type}>
    {props.text}
  </Button>
);
export default CustomButton;
