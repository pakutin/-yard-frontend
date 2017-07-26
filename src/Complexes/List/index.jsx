// @flow

import React, { Component } from 'react';
import 'whatwg-fetch';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { get } from '../../api';
import Media from '../media';
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
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 2rem;
  ${Media.md`
    padding-bottom: 3rem;
  `};
`;

class Complexes extends Component {
  state: { complexes: Array<ComplexType> } = { complexes: [] };

  componentDidMount() {
    get('/complexes?filter[state]=public').then(json => this.setState({ complexes: json.items }));
  }

  render() {
    return (
      <Main>
        <Logo />
        <Intro />
        <Cards>
          <Grid>
            {this.state.complexes.map(complex => <Card key={complex.id} complex={complex} />)}
          </Grid>
        </Cards>
      </Main>
    );
  }
}

export default Complexes;
