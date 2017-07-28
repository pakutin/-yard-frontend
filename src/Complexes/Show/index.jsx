// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { get } from '../../api';
import type { ComplexType } from '../types';
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
  state = { complex: {} };
  state: { complex: ComplexType };

  componentDidMount() {
    const complexSlug = this.props.match.params.slug;
    get(`complexes/${complexSlug}`).then(json => this.setState({ complex: json }));
  }

  render() {
    const {
      complex = {},
      complex: { name, location = {}, images = [], amenities = [] } = {},
    } = this.state;
    return (
      <main>
        {name && <Header name={name} location={location} />}
        {name && <Gallery name={name} images={images} />}
        <Characteristics>
          <TopFeatures complex={complex} />
          <Features complex={complex} />
          <Description />
          {amenities.length > 0 && <Amenities amenities={amenities} />}
          {name && <Offers name={name} />}
        </Characteristics>
        <Guide
          district="Якиманка"
          tagline="Исторический центр Москвы в&nbsp;двух километрах&nbsp;от&nbsp;Кремля"
          link="Гид по Якиманке"
        />
        <Sights location={location} />
      </main>
    );
  }
}

export default Complex;
