import React from "react";
import "./complex.css";

import Name from "./Complexes/Name";
import Gallery from "./Complexes/Gallery";
import TopFeatures from "./Complexes/TopFeatures";
import Features from "./Complexes/Features";
import Description from "./Complexes/Description";
import Facilities from "./Complexes/Facilities";
import Offers from "./Complexes/Offers";
import Guide from "./Complexes/Guide";
import Sights from "./Complexes/Sights";

export default () => {
  return (
    <div>
      <Name />
      <Gallery />
      <article className="complex">
        <div class="container">
          <TopFeatures />
          <Features />
          <Description />
          <Facilities />
          <Offers />
          <Guide />
          <Sights />
        </div>
      </article>
    </div>
  );
};
