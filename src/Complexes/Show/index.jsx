// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { get } from '../../api';
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
    get(`/complexes/${complexSlug}`).then(json => this.setState({ complex: json }));
  }

  render() {
    const {
      complex = {},
      complex: { name, location = {}, images = [], fullDescription, amenities = [] } = {},
    } = this.state;

    return (
      <main>
        <Header name={name} location={location} />
        <Gallery name={name} images={images} />
        <Characteristics>
          <TopFeatures complex={complex} />
          <Features complex={complex} />
          {fullDescription && <Description text={fullDescription} />}
          {amenities.length > 0 && <Amenities amenities={amenities} />}
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
