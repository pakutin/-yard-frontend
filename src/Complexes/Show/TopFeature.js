import React from "react";
import SectionTitle from "./SectionTitle";

export default props =>
  <div className="complex-top-feature">
    <SectionTitle>
      {props.value}
      <br />
      <small className="complex-top-feature-caption">
        {props.label}
      </small>
    </SectionTitle>
  </div>;
