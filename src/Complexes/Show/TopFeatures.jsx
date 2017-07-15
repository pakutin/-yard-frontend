import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import ruplu from 'ruplu';
import TopFeature from './TopFeature';

const offers = ruplu(['предложение', 'предложения', 'предложений']);

const TopFeatures = styled.section`
  display: flex;
  margin-top: 1.75rem;
  padding-bottom: 1.625rem;
  margin-bottom: 2rem;
  font-family: "Philosopher", "Iowan", serif;
  border-bottom: 1px solid #e0e0e1;
`;

export default props =>
  (<Grid>
    <TopFeatures>
      {props.offers &&
        <TopFeature value={props.offers} label={offers(props.offers.length, true)} />}
      {props.details.architect && <TopFeature value={props.details.architect} label="архитектор" />}
      {props.details.developer && <TopFeature value={props.details.developer} label="застройщик" />}
    </TopFeatures>
  </Grid>);
