import React from "react";

export default props =>
  <div className="sights-list">
    <div className="sight">
      <p className="sight-name">
        {props.name}
      </p>
      <p className="sight-distance">
        {props.distance}
      </p>
    </div>
  </div>;
