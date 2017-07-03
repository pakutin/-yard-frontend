import React from "react";
import "./complex.css";
import Header from "./Header";
import Promo from "./Promo";
import PromoGallery from "./PromoGallery";
import ComplexFeatures from "./ComplexFeatures";
import ComplexTopFeatures from "./ComplexTopFeatures";
import ComplexDescription from "./ComplexDescription";
import ComplexFacilities from "./ComplexFacilities";
import ComplexFlatCards from "./ComplexFlatCards";
import ComplexGuide from "./ComplexGuide";
import ComplexSights from "./ComplexSights";
import Footer from "./Footer";
import arrow from "./img/arrow.svg";
export default () => {
  return (
    <div>
      <Header />
      <Promo />
      <PromoGallery />
      <article className="complex">
        <div class="container">
          <ComplexTopFeatures />
          <ComplexFeatures />
          <ComplexDescription />
          <ComplexFacilities />
          <ComplexFlatCards />
          <ComplexGuide />
          <ComplexSights />
        </div>
      </article>
      <Footer />
    </div>
  );
};
