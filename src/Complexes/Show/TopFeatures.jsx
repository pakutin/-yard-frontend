// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import ruplu from 'ruplu';
import TopFeature from './TopFeature';

const plural = ruplu(['предложение', 'предложения', 'предложений']);

const TopFeatures = styled.section`
  display: flex;
  margin-top: 1.75rem;
  padding-bottom: 1.625rem;
  margin-bottom: 2rem;
  font-family: "Philosopher", "Iowan", serif;
  border-bottom: 1px solid #e0e0e1;
`;

export default function (props) {
  const { statistics = {}, details = {} } = props.complex || {};
  return (
    <Grid>
      <TopFeatures>
        {statistics.propertiesCount &&
          <TopFeature
            value={statistics.propertiesCount}
            label={plural(statistics.propertiesCount.length, true)}
          />}
        {details.architect && <TopFeature value={details.architect} label="архитектор" />}
        {details.developer && <TopFeature value={details.developer} label="застройщик" />}
      </TopFeatures>
    </Grid>
  );
}
