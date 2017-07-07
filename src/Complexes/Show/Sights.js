import React from "react";
import { Grid, Row, Col } from "react-flexboxgrid";
import Sight from "./Sight";

export default () => {
  return (
    <section className="sights">
      <Row>
        <Col lg={6}>
          <img
            className="sights-map"
            src={process.env.PUBLIC_URL + "./map.png"}
            srcSet={`${process.env.PUBLIC_URL + "./map@2x.png"} 2x, ${process
              .env.PUBLIC_URL + "./map@3x.png"} 3x`}
          />
        </Col>
        <Col lg={6}>
          <Sight name="Красный Октябрь" distance="24 минуты, 6 км" />
          <Sight name="World Class" distance="2 минуты, 300 м" />
          <Sight name="Третьяковская галерея" distance="14 минут, 4 км" />
        </Col>
      </Row>
    </section>
  );
};
