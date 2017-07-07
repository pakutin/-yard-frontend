import React from "react";
import { Grid, Row, Col } from "react-flexboxgrid";

export default props =>
  <section className="guide">
    <Row>
      <Col lg={6}>
        <div className="guide-name">
          <p className="guide-label">
            {props.district}
          </p>
          <p className="guide-tagline">
            {props.tagline}
          </p>
          <p>
            <a className="guide-link" href>
              {props.link + "→"}
            </a>
          </p>
        </div>
      </Col>
      <Col lg={6}>
        <div className="guide-cover">
          <img
            src={process.env.PUBLIC_URL + "./polyankaPhoto.jpg"}
            srcSet={`${process.env.PUBLIC_URL +
              "./polyankaPhoto@2x.jpg"} 2x, ${process.env.PUBLIC_URL +
              "./polyankaPhoto@3x.jpg"} 3x`}
          />
        </div>
      </Col>
    </Row>
  </section>;
