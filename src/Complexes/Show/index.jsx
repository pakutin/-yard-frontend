import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Gallery from './Gallery';
import TopFeatures from './TopFeatures';
import Features from './Features';
import Description from './Description';
import Amenities from './Amenities';
import Offers from './Offers';
import Guide from './Guide';
import Sights from './Sights';

const Characteristics = styled.article`
  margin-top: 0;
  font-size: 1rem;
  line-height: 1.5;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #3e4247;
`;

class Complex extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const complexSlug = this.props.match.params.slug;
    fetch(`https://yard.moscow/api/v1/complexes/${complexSlug}`)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          complex: json,
        });
      });
  }
  render() {
    const complex = this.state.complex;
    if (complex === undefined) {
      return null;
    }
    return (
      <main>
        <Header name={complex.name} address={complex.location} />
        <Gallery images={complex.images} name={complex.name} />
        <Characteristics>
          <TopFeatures offers={complex.statistics.propertiesCount} details={complex.details} />
          <Features
            flats={complex.units}
            details={complex.details}
            statistics={complex.statistics}
          />
          <Description text={complex.fullDescription} />
          <Amenities amenities={complex.amenities} />
          <Offers name={complex.name} />
          <Guide
            district="Якиманка"
            tagline="Исторический центр Москвы в&nbsp;двух километрах&nbsp;от&nbsp;Кремля"
            link="Гид по Якиманке"
          />
          <Sights />
        </Characteristics>
      </main>
    );
  }
}

export default Complex;
