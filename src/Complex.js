import React from "react";
import "./css/complex.css";
import Header from "./Header";
import Name from "./show/Name";
import Gallery from "./show/Gallery";
import TopFeatures from "./show/TopFeatures";
import Features from "./show/Features";
import Description from "./show/Description";
import Facilities from "./show/Facilities";
import Offers from "./show/Offers";
import Guide from "./show/Guide";
import Sights from "./show/Sights";
import Footer from "./Footer";
export default () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};
