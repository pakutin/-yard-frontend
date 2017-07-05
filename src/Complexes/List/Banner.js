import React from "react";

import heroLogo from "./hero-logo.svg";
export default () => {
  return (
    <div>
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
    </div>
  );
};
