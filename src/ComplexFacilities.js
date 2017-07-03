import React from "react";
import "./complex.css";
export default () => {
  return (
    <section className="complex-facilities">
      <div className="container">
        <h2 className="complex-heading complex-facilities-heading">
          Инфраструктура
        </h2>
        <div className="row">
          <div className="col-xs-2">
            <p className="complex-facility">Бассейн</p>
            <p className="complex-facility">Частная школа</p>
          </div>
          <div className="col-xs-2">
            <p className="complex-facility">Детский сад</p>
            <p className="complex-facility">Частная школа</p>
          </div>
          <div className="col-xs-2">
            <p className="complex-facility">Частная школа</p>
            <p className="complex-facility">Частная школа</p>
          </div>
          <div className="col-xs-2">
            <p className="complex-facility">Бассейн</p>
          </div>
          <div className="col-xs-2">
            <p className="complex-facility">Детский сад</p>
          </div>
          <div className="col-xs-2">
            <p className="complex-facility">Частная школа</p>
          </div>
        </div>
      </div>
    </section>
  );
};
