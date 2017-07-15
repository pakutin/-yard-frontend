import React, { Component } from 'react';
import 'whatwg-fetch';
import styled from 'styled-components';
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
    this.state = {};
  }
  componentDidMount() {
    fetch('https://yard.moscow/api/v1/complexes?filter%5Bstate%5D=public')
      .then(response => response.json())
      .then((json) => {
        this.setState({
          data: json.items,
        });
      });
  }
  render() {
    if (this.state.data === undefined) {
      return (
        <Cards>
          <Banner />
        </Cards>
      );
    }
    return (
      <Cards>
        <Banner />
        {this.state.data.map(complex => <Card key={complex.id} complex={complex} />)}
      </Cards>
    );
  }
}

export default Complexes;
