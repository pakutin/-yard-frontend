import React, { Component } from 'react';
import 'whatwg-fetch';
import styled from 'styled-components';
import { get } from '../../api';
import Banner from './Banner';
import Card from './Card';
import background from './background.png';

const Cards = styled.main`
  padding-bottom: 3rem;
  background-image: url(${background});
  background-color: #eaebf0;
  background-size: 20px 10px;
  background-repeat: repeat;
`;

class Complexes extends Component {
  constructor() {
    super();
    this.state = {
      complexes: [],
    };
  }

  componentDidMount() {
    get('/complexes?filter[state]=public').then(json => this.setState({ complexes: json.items }));
  }

  render() {
    return (
      <Cards>
        <Banner />
        {this.state.complexes.map(complex => <Card key={complex.id} complex={complex} />)}
      </Cards>
    );
  }
}

export default Complexes;
