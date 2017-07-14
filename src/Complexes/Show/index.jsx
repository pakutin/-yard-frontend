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
    const complex = this.state.data;
    if (complex === undefined) {
      return <Header />;
    }
    return (
      <main>
        <Header
          name={complex.name}
          address={`${complex.location.subLocalityName}, ${complex.location.street}, ${complex
            .location.house}`}
        />
        <Gallery images={complex.images} name={complex.name} />
        <Characteristics>
          <TopFeatures
            architect={complex.details.architect}
            offers={complex.statistics.PropertiesCount}
          />
          <Features
            flats={complex.units}
            security={securityKinds[complex.details.security]}
            construction={constructionKinds[complex.details.constructionKind]}
            height={{
              min: complex.details.ceilHeight.from.toFixed(2),
              max: complex.details.ceilHeight.to.toFixed(2),
            }}
            price={{
              min: (complex.statistics.price.from.rub / 1000000).toFixed(2),
              max: (complex.statistics.price.to.rub / 1000000).toFixed(2),
            }}
            area={{
              min: complex.statistics.totalArea.from.toFixed(0),
              max: complex.statistics.totalArea.to.toFixed(0),
            }}
            maintenance={complex.details.maintenanceCosts}
            startQuarter={quarters[complex.details.startQuarter]}
            startYear={complex.details.startYear}
            commissioningQuarter={quarters[complex.details.commissioningQuarter]}
            commissioningYear={complex.details.commissioningYear}
            parking={complex.details.parkings}
            underground={complex.details.undergroundGarages}
          />
          <Description text={complex.fullDescription} />
          <Facilities amenities={complex.amenities} />
          <Offers name={complex.name} />
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
