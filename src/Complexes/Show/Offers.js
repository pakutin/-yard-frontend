import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Offer from "./Offer";

export default () => {
  return (
    <section className="complex-flat-cards">
      <h2 className="complex-heading complex-flat-cards-heading">
        Предложения в ЖК «Полянка/44»
      </h2>
      <Row>
        <Col lg={4}>
          <Offer
            room={1}
            space={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
        <Col lg={4}>
          <Offer
            room={2}
            space={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
        <Col lg={4}>
          <Offer
            room={3}
            space={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
      </Row>
    </section>
  );
};
