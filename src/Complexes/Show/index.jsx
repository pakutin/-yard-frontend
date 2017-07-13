import React, { Component } from 'react';
import styled from 'styled-components';
import { securityKinds, constructionKinds, quarters } from './Dictionary';
import Header from './Header';
import Gallery from './Gallery';
import TopFeatures from './TopFeatures';
import Features from './Features';
import Description from './Description';
import Facilities from './Facilities';
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
    const complexLink = this.props.match.params.slug;
    fetch(`https://yard.moscow/api/v1/complexes/${complexLink}`)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }
  render() {
    if (this.state.data === undefined) {
      return <Header />;
    }
    return (
      <main>
        <Header
          name={this.state.data.name}
          address={`${this.state.data.location.subLocalityName}, ${this.state.data.location
            .street}, ${this.state.data.location.house}`}
        />
        <Gallery images={this.state.data.images} name={this.state.data.name} />
        <Characteristics>
          <TopFeatures
            architect={this.state.data.details.architect}
            offers={this.state.data.statistics.resalePropertiesCount}
          />
          <Features
            flats={this.state.data.statistics.propertiesCount}
            security={securityKinds[this.state.data.details.security]}
            construction={constructionKinds[this.state.data.details.constructionKind]}
            height={{
              min: this.state.data.details.ceilHeight.from.toFixed(2),
              max: this.state.data.details.ceilHeight.to.toFixed(2),
            }}
            price={{
              min: (this.state.data.statistics.price.from.rub / 1000000).toFixed(2),
              max: (this.state.data.statistics.price.to.rub / 1000000).toFixed(2),
            }}
            area={{
              min: this.state.data.statistics.totalArea.from.toFixed(2),
              max: this.state.data.statistics.totalArea.to.toFixed(2),
            }}
            maintenance={this.state.data.details.maintenanceCosts}
            startQuarter={quarters[this.state.data.details.startQuarter]}
            startYear={this.state.data.details.startYear}
            commissioningQuarter={quarters[this.state.data.details.commissioningQuarter]}
            commissioningYear={this.state.data.details.commissioningYear}
            parking={this.state.data.details.parkings}
            underground={this.state.data.details.undergroundGarages}
          />
          <Description text={this.state.data.fullDescription} />
          <Facilities />
          <Offers name={this.state.data.name} />
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
