// @flow

import React, { Component } from 'react';
import 'whatwg-fetch';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { get } from '../../api';
import { media } from '../media';
import type { ComplexType } from '../types';
import Logo from './Logo';
import Intro from './Intro';
import Card from './Card';
import background from './background.png';

const Main = styled.main`
  background-image: url(${background});
  background-color: #eaebf0;
  background-size: 20px 10px;
  background-repeat: repeat;
`;

const Cards = styled.div`
  padding-bottom: 2rem;
  ${media.md`
    padding-bottom: 3rem;
  `};
`;

class Complexes extends Component {
  state: { complexes: Array<ComplexType> } = { complexes: [] };

  componentDidMount() {
    get('?filter[state]=public').then(json => this.setState({ complexes: json.items }));
  }

  render() {
    return (
      <Main>
        <Logo />
        <Intro />
        <Cards>
          <Grid fluid>
            {this.state.complexes.map(complex => <Card key={complex.id} complex={complex} />)}
          </Grid>
        </Cards>
      </Main>
    );
  }
}

export default Complexes;
