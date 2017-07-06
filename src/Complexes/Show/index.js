import React from "react";
import { Grid } from "react-flexboxgrid";

import Name from "./Name";
import Gallery from "./Gallery";
import TopFeatures from "./TopFeatures";
import Features from "./Features";
import Description from "./Description";
import Facilities from "./Facilities";
import Offers from "./Offers";
import Guide from "./Guide";
import Sights from "./Sights";

import "./complex.css";

export default () => {
  return (
    <main>
      <Name address="Район Якиманка, улица Большая Полянка, дом 44 • 119180">
        Жилой комплекс «Полянка/44»
      </Name>
      <Gallery />
      <article className="complex">
        <Grid>
          <TopFeatures />
          <Features />
          <Description />
          <Facilities />
          <Offers />
          <Guide
            district="Якиманка"
            tagline="Исторический центр Москвы в&nbsp;двух километрах от&nbsp;Кремля"
            link="Гид по Якиманке"
          />
          <Sights />
        </Grid>
      </article>
    </main>
  );
};
