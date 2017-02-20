import React from "react";
import { Textfield } from "react-mdl";

const InputField = ({ name, value, onChange }) => (
  <Textfield
    label={name}
    floatingLabel
    value={value}
    onChange={(e) => { onChange(e.target.value); }}
  />
);

export default InputField;
