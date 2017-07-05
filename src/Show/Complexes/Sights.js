import React from "react";
export default () => {
  return (
    <section className="sights">
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <img
              className="sights-map"
              src={process.env.PUBLIC_URL + './map.png'}
              srcSet={`${process.env.PUBLIC_URL + './map@2x.png'} 2x, ${process.env.PUBLIC_URL + './map@3x.png'} 3x`}
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
