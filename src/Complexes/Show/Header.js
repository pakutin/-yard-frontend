import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default props =>
  <section className="promo">
    <Grid>
      <div className="promo-wrapper">
        <div className="promo-complex">
          <h1 className="promo-name">
            {props.children}
          </h1>
          <p className="promo-address">
            {props.address}
          </p>
        </div>
        <button className="promo-favorite-button">В&nbsp;избранное</button>
      </div>
    </Grid>
  </section>;
