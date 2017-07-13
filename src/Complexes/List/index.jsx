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
        {this.state.data.map(complex =>
          (<Card
            key={complex.id}
            id={complex.id}
            name={complex.name}
            location={`${complex.location.subLocalityName}, ${complex.location.street}, ${complex
              .location.house}`}
            image={complex.image.id}
          >
            The Lewis Steel Building is a masterful industrial conversion located in the heart of
            Williamsburg. Located at 76 North 4th Street, the former 1930&apos;s steel factory has
            been transformed into 83 individually unique and luxury loft apartments.
          </Card>),
        )}
      </Cards>
    );
  }
}

export default Complexes;
