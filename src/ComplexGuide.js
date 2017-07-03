import React from "react";
import "./complex.css";
import guide from "./img/polyankaPhoto.jpg";
import guide_2x from "./img/polyankaPhoto@2x.jpg";
import guide_3x from "./img/polyankaPhoto@3x.jpg";
export default () => {
  return (
    <section className="guide">
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <div className="guide-name">
              <p className="guide-label">Якиманка</p>
              <p className="guide-tagline">
                Исторический центр Москвы в двух
                <br />
                километрах от&nbsp;Кремля
              </p>
              <p><a className="guide-link" href>Гид по Якиманке →</a></p>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="guide-cover">
              <img src={guide} srcSet={`${guide_2x} 2x, ${guide_3x} 3x`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
