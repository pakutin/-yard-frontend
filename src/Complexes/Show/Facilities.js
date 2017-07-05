import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <section className="complex-facilities">
      <h2 className="complex-heading complex-facilities-heading">
        Инфраструктура
        </h2>
      <Row>
        <Col lg={2}>
          <p className="complex-facility">Бассейн</p>
          <p className="complex-facility">Частная школа</p>
        </Col>
        <Col lg={2}>
          <p className="complex-facility">Детский сад</p>
          <p className="complex-facility">Частная школа</p>
        </Col>
        <Col lg={2}>
          <p className="complex-facility">Частная школа</p>
          <p className="complex-facility">Частная школа</p>
        </Col>
        <Col lg={2}>
          <p className="complex-facility">Бассейн</p>
        </Col>
        <Col lg={2}>
          <p className="complex-facility">Детский сад</p>
        </Col>
        <Col lg={2}>
          <p className="complex-facility">Частная школа</p>
        </Col>
      </Row>
    </section>
  );
};
