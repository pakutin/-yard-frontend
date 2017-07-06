import React from "react";
import { Grid, Row, Col } from "react-flexboxgrid";

export default () => {
  return (
    <section className="guide">
      <Row>
        <Col lg={6}>
          <div className="guide-name">
            <p className="guide-label">Якиманка</p>
            <p className="guide-tagline">
              Исторический центр Москвы в двух
              <br />
              километрах от&nbsp;Кремля
            </p>
            <p>
              <a className="guide-link" href>
                Гид по Якиманке →
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
    </section>
  );
};
