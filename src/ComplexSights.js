import React from "react";
import "./complex.css";
import map from "./img/map.png";
import map_2x from "./img/map@2x.png";
import map_3x from "./img/map@3x.png";
export default () => {
  return (
    <section className="sights">
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <img
              className="sights-map"
              src={map}
              srcSet={`${map_2x} 2x, ${map_3x} 3x`}
            />
          </div>
          <div className="col-xs-6">
            <div className="sights-list">
              <div className="sight">
                <p className="sight-name">Красный Октябрь</p>
                <p className="sight-distance">24 минуты, 6 км</p>
              </div>
              <div className="sight">
                <p className="sight-name">World class</p>
                <p className="sight-distance">2 минуты, 300 м</p>
              </div>
              <div className="sight">
                <p className="sight-name">Третьяковская галерея</p>
                <p className="sight-distance">14 минут, 4 км</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
