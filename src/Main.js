import React from "react";
import "./css/complexes.css";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./list/Banner";
import Card from "./list/Card";
export default () => {
  return (
    <div>
      <main>
        <Header />
        <Banner />
        <Card />
        <Card />
        <Card />
      </main>
      <Footer />
    </div>
  );
};
