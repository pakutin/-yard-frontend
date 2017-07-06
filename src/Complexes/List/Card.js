import React from "react";
import { Link } from "react-router-dom";

export default props =>
  <Link to="/complex">
    <article className="complex">
      <img
        src={process.env.PUBLIC_URL + "./img1.jpg"}
        srcSet={`${process.env.PUBLIC_URL + "./img1@2x.jpg"} 2x, 
            ${process.env.PUBLIC_URL + "./img1@3x.jpg"} 3x`}
        alt="764 Metropolitan Avenue"
      />
      <div className="complex-data">
        <p className="complex-location">
          {props.location}
        </p>
        <h3 className="complex-name">
          {props.name}
        </h3>
        <p className="complex-description">
          {props.description}
        </p>
      </div>
    </article>
  </Link>;
