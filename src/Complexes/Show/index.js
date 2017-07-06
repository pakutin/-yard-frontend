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
      <Name />
      <Gallery />
      <article className="complex">
        <Grid>
          <TopFeatures />
          <Features />
          <Description />
          <Facilities />
          <Offers />
          <Guide />
          <Sights />
        </Grid>
      </article>
    </main>
  );
};
