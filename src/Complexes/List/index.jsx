// @flow

import React, { Component } from 'react';
import 'whatwg-fetch';
import styled from 'styled-components';
import Media from '../media';
import { get } from '../../api';
import type { ComplexType } from '../types';
import Banner from './Banner';
import Card from './Card';
import background from './background.png';

const Cards = styled.main`
  padding-bottom: 2rem;
  ${Media.md`
    padding-bottom: 3rem;
  `};
  background-image: url(${background});
  background-color: #eaebf0;
  background-size: 20px 10px;
  background-repeat: repeat;
  @media (min-width: 62rem) {
    padding-bottom: 3rem;
  }
`;

class Complexes extends Component {
  state: { complexes: Array<ComplexType> } = { complexes: [] };

  componentDidMount() {
    get('/complexes?filter[state]=public').then(json => this.setState({ complexes: json.items }));
  }

  render() {
    return (
      <main>
        <Cards>
          <Banner />
          {this.state.complexes.map(complex => <Card key={complex.id} complex={complex} />)}
        </Cards>
      </main>
    );
  }
}

export default Complexes;
