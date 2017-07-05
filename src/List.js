import React from "react";
import "./complexes.css";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "./List/Banner";
import Card from "./List/Card";

export default () => {
  return (
    <div>
      <Banner />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
