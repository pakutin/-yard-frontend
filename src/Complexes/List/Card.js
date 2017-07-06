import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Link to="/complex">
      <article className="complex">
        <img
          src={process.env.PUBLIC_URL + "./img1.jpg"}
          srcSet={`${process.env.PUBLIC_URL + "./img1@2x.jpg"} 2x, 
            ${process.env.PUBLIC_URL + "./img1@3x.jpg"} 3x`}
          alt="764 Metropolitan Avenue"
        />
        <div className="complex-data">
          <p className="complex-location">South Beach, San Francisco</p>
          <h3 className="complex-name">764 Metropolitan Avenue</h3>
          <p className="complex-description">
            The Lewis Steel Building is a masterful industrial conversion
            located in the heart of Williamsburg. Located at 76 North 4th
            Street, the former 1930's steel factory has been transformed into 83
            individually unique and luxury loft apartments.
          </p>
        </div>
      </article>
    </Link>
  );
};
