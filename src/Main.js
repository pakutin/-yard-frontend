import React from "react";
import "./complexes.css";
import Header from "./Header";
import Footer from "./Footer";
import { Complex } from "react-router-dom";
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
