import React from "react";
import "./complex.css";
export default () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-wrapper">
          <div className="promo-complex">
            <h1 className="promo-name">Жилой комплекс «Полянка/44»</h1>
            <p className="promo-address">
              Район Якиманка, улица Большая Полянка, дом 44 • 119180
            </p>
          </div>
          <button className="promo-favorite-button">
            В&nbsp;избранное
          </button>
        </div>
      </div>
    </section>
  );
};
