import React from "react";
import Intro from "./Intro";
import heroLogo from "./hero-logo.svg";

export default () => {
  return (
    <div>
      <section className="main-logo">
        <img src={heroLogo} width="418.9px" height="131px" />
      </section>
      <Intro />
    </div>
  );
};
