import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default props =>
  <div className="complex-flat-card">
    <h3 className="complex-flat-card-subheading">
      {props.room}-комнатные квартиры
    </h3>
    <h4 className="complex-flat-card-feature">Площадь</h4>
    <p className="complex-flat-card-feature-value">
      от {props.space.min} до {props.space.max} м²
    </p>
    <h4 className="complex-flat-card-feature">Стоимость</h4>
    <p className="complex-flat-card-feature-value">
      от {props.price.min} до {props.price.max} млн руб
    </p>
    <button className="complex-flat-card-button">
      Посмотреть&nbsp;предложения
    </button>
  </div>;
