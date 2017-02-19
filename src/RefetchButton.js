import React from "react";
import { IconButton } from "react-mdl";

const RefetchButton = ({ refetch }) => (
  <IconButton ripple name="cached" onClick={() => { refetch(); }} />
);

export default RefetchButton;
