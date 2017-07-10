import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Gallery from './Gallery';
import TopFeatures from './TopFeatures';
import Features from './Features';
import Description from './Description';
import Facilities from './Facilities';
import Offers from './Offers';
import Guide from './Guide';
import Sights from './Sights';

const Complex = styled.article`
  margin-top: 0;
  font-size: 1rem;
  line-height: 1.5;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #3e4247;
`;

export default () => (
  <main>
    <Header address="Район Якиманка, улица Большая Полянка, дом 44 • 119180">
        Жилой комплекс «Полянка/44»
      </Header>
    <Gallery />
    <Complex>
      <TopFeatures />
      <Features />
      <Description />
      <Facilities />
      <Offers />
      <Guide
        district="Якиманка"
        tagline="Исторический центр Москвы в&nbsp;двух километрах&nbsp;от&nbsp;Кремля"
        link="Гид по Якиманке"
      />
      <Sights />
    </Complex>
  </main>
  );
