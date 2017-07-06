import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <section className="complex-flat-cards">
      <h2 className="complex-heading complex-flat-cards-heading">
        Предложения в ЖК «Полянка/44»
      </h2>
      <Row>
        <Col lg={4}>
          <div className="complex-flat-card">
            <h3 className="complex-flat-card-subheading">
              1-комнатные квартиры
            </h3>
            <h4 className="complex-flat-card-feature">Площадь</h4>
            <p className="complex-flat-card-feature-value">от 59 до 120 м²</p>
            <h4 className="complex-flat-card-feature">Стоимость</h4>
            <p className="complex-flat-card-feature-value">
              от 20.3 до 84.2 млн руб
            </p>
            <button className="complex-flat-card-button">
              Посмотреть&nbsp;предложения
            </button>
          </div>
        </Col>
        <Col lg={4}>
          <div className="complex-flat-card">
            <h3 className="complex-flat-card-subheading">
              2-комнатные квартиры
            </h3>
            <h4 className="complex-flat-card-feature">Площадь</h4>
            <p className="complex-flat-card-feature-value">от 59 до 120 м²</p>
            <h4 className="complex-flat-card-feature">Стоимость</h4>
            <p className="complex-flat-card-feature-value">
              от 20.3 до 84.2 млн руб
            </p>
            <button className="complex-flat-card-button">
              Посмотреть&nbsp;предложения
            </button>
          </div>
        </Col>
        <Col lg={4}>
          <div className="complex-flat-card">
            <h3 className="complex-flat-card-subheading">
              3-комнатные квартиры
            </h3>
            <h4 className="complex-flat-card-feature">Площадь</h4>
            <p className="complex-flat-card-feature-value">от 59 до 120 м²</p>
            <h4 className="complex-flat-card-feature">Стоимость</h4>
            <p className="complex-flat-card-feature-value">
              от 20.3 до 84.2 млн руб
            </p>
            <button className="complex-flat-card-button">
              Посмотреть&nbsp;предложения
            </button>
          </div>
        </Col>
      </Row>
    </section>
  );
};
