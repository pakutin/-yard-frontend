import React from "react";
import { Row, Col } from "react-flexbox-grid";
import SectionTitle from "./SectionTitle";
import Facility from "./Facility";

export default () => {
  return (
    <section className="complex-facilities">
      <SectionTitle>Инфраструктура</SectionTitle>
      <Row>
        <Col lg={2}>
          <Facility>Бассейн</Facility>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Детский сад</Facility>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Частная школа</Facility>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Бассейн</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Детский сад</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Частная школа</Facility>
        </Col>
      </Row>
    </section>
  );
};
