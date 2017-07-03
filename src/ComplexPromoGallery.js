import React from "react";
import "./complex.css";
import complex1 from "./img/complex1.jpg";
import complex1_2x from "./img/complex1@2x.jpg";
import complex1_3x from "./img/complex1@3x.jpg";
import complex2 from "./img/complex2.jpg";
import complex2_2x from "./img/complex2@2x.jpg";
import complex2_3x from "./img/complex2@3x.jpg";
import complex3 from "./img/complex3.jpg";
import complex3_2x from "./img/complex3@2x.jpg";
import complex3_3x from "./img/complex3@3x.jpg";
import complex4 from "./img/complex4.jpg";
import complex4_2x from "./img/complex4@2x.jpg";
import complex4_3x from "./img/complex4@3x.jpg";
import complex5 from "./img/complex5.jpg";
import complex5_2x from "./img/complex5@2x.jpg";
import complex5_3x from "./img/complex5@3x.jpg";
export default () => {
  return (
    <section className="promo-gallery">
      <img
        className="gallery-picture"
        src={complex1}
        srcSet={`${complex1_2x} 2x, ${complex1_3x} 3x`}
      />
      <img
        className="gallery-picture"
        src={complex2}
        srcSet={`${complex2_2x} 2x, ${complex2_3x} 3x`}
      />
      <img
        className="gallery-picture"
        src={complex3}
        srcSet={`${complex3_2x} 2x, ${complex3_3x} 3x`}
      />
      <img
        className="gallery-picture"
        src={complex4}
        srcSet={`${complex4_2x} 2x, ${complex4_3x} 3x`}
      />
      <img
        className="gallery-picture"
        src={complex5}
        srcSet={`${complex5_2x} 2x, ${complex5_3x} 3x`}
      />
      <div className="gallery-overlay">
        <button className="gallery-button">41 фотография</button>
      </div>
    </section>
  );
};
