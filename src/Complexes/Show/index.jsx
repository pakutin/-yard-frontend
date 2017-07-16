import React, { Component } from 'react';
import styled from 'styled-components';
import request from '../../api';
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
    this.state = {
      complex: {},
    };
  }

  componentDidMount() {
    const complexSlug = this.props.match.params.slug;
    request(`/complexes/${complexSlug}`).then(json => this.setState({ complex: json }));
  }

  render() {
    const {
      complex: {
        name,
        location = {},
        images = [],
        statistics = {},
        details = {},
        units,
        fullDescription,
        amenities = [],
      },
    } = this.state;

    return (
      <main>
        <Header name={name} location={location} />
        <Gallery images={images} name={name} />
        <Characteristics>
          <TopFeatures statistics={statistics} details={details} />
          <Features flats={units} details={details} statistics={statistics} />
          {fullDescription && <Description text={fullDescription} />}
          {amenities && amenities.length > 0 && <Amenities amenities={amenities} />}
          <Offers name={name} />
        </Characteristics>
        <Guide
          district="Якиманка"
          tagline="Исторический центр Москвы в&nbsp;двух километрах&nbsp;от&nbsp;Кремля"
          link="Гид по Якиманке"
        />
        <Sights />
      </main>
    );
  }
}

export default Complex;
