import React from "react";
import { Row, Col } from "react-flexbox-grid";
import SectionTitle from "./SectionTitle";
import Offer from "./Offer";

export default () => {
  return (
    <section className="complex-flat-cards">
      <SectionTitle>Предложения в ЖК «Полянка/44»</SectionTitle>
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
