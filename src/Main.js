import React from "react";
import "./complexes.css";
import Header from "./Header";
import Intro from "./Intro";
import Complexes from "./Complexes";
import Footer from "./Footer";
export default () => {
  return (
    <div>
      <main>
        <Header />
        <Intro />
        <Complexes />
      </main>
      <Footer />
    </div>
  );
};
