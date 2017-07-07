import React from "react";
import { Grid, Row, Col } from "react-flexboxgrid";
import SectionTitle from "./SectionTitle";

export default () => {
  return (
    <section className="complex-features">
      <SectionTitle>Характеристики</SectionTitle>
      <Row>
        <Col lg={4}>
          <dl className="complex-feature-list">
            <dt className="complex-feature-type">Количество квартир:</dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">Статус:</dt>
            <dd className="complex-feature-value">Квартиры</dd>
            <dt className="complex-feature-type">Цены:</dt>
            <dd className="complex-feature-value">от 5.3 до 143.5 млн</dd>
          </dl>
        </Col>
        <Col lg={4}>
          <dl className="complex-feature-list">
            <dt className="complex-feature-type">Количество квартир:</dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">Количество квартир:</dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">Количество квартир:</dt>
            <dd className="complex-feature-value">1 503</dd>
          </dl>
        </Col>
        <Col lg={4}>
          <dl className="complex-feature-list">
            <dt className="complex-feature-type">Количество квартир:</dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">Количество квартир:</dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">Количество квартир:</dt>
            <dd className="complex-feature-value">1 503</dd>
          </dl>
        </Col>
      </Row>
    </section>
  );
};
