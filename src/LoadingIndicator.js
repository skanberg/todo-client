import React from "react";
import { Spinner } from "react-mdl";

const LoadingIndicator = () => (
  <div className="loadingIndicator">
    <Spinner singleColor />
  </div>
);

export default LoadingIndicator;
