import React from "react";
import "./complexes.css";
import Header from "./Header";
import Footer from "./Footer";
import heroLogo from "./img/hero-logo.svg";
import img from "./img/img1.jpg";
import img_2x from "./img/img1@2x.jpg";
import img_3x from "./img/img1@3x.jpg";
import { Complex } from "react-router-dom";
export default () => {
  return (
    <div>
      <Header />
      <main>
        <section className="main-logo">
          <img src={heroLogo} width="418.9px" height="131px" />
        </section>
        <section className="intro">
          <h2 className="intro-title">Discover Our New Developments</h2>
          <p className="intro-text">
            Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious
            ground-up condominiums, browse our portfolio of current offerings.
          </p>
          <button className="intro-button">Contact The Team</button>
        </section>
        <section className="complexes">
          <article
            className="complex"
            onclick="location.href='';"
            style={{ cursor: "pointer" }}
          >
            <img
              src={img}
              srcSet={`${img_2x} 2x, ${img_3x} 3x`}
              alt="764 Metropolitan Avenue"
            />
            <div className="complex-data">
              <p className="complex-location">South Beach, San Francisco</p>
              <h3 className="complex-name">764 Metropolitan Avenue</h3>
              <p className="complex-description">
                The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at
                76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury
                loft apartments.
              </p>
            </div>
          </article>
          <article
            className="complex"
            onclick="location.href='';"
            style={{ cursor: "pointer" }}
          >
            <img
              src={img}
              srcSet={`${img_2x} 2x, ${img_3x} 3x`}
              alt="100 East 53rd Street"
            />
            <div className="complex-data">
              <p className="complex-location">Midtown East, Manhattan</p>
              <h3 className="complex-name">100 East 53rd Street</h3>
              <p className="complex-description">
                One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown
                Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story
                tower are generously proportioned.
              </p>
            </div>
          </article>
          <article
            className="complex"
            onclick="location.href='';"
            style={{ cursor: "pointer" }}
          >
            <img
              src={img}
              srcSet={`${img_2x} 2x, ${img_3x} 3x`}
              alt="152 Elizabeth"
            />
            <div className="complex-data">
              <p className="complex-location">Nolita, Manhattan</p>
              <h3 className="complex-name">152 Elizabeth</h3>
              <p className="complex-description">
                152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect
                Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building
                will stand as a profound architectural statement and embrace the industrial character of the neighborhood.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};
