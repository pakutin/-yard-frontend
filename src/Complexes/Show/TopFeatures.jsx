import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import TopFeature from './TopFeature';

const TopFeatures = styled.section`
  display: flex;
  margin-top: 2.75rem;
  padding-bottom: 1.625rem;
  margin-bottom: 2rem;
  font-family: "Philosopher", "Iowan", serif;
  border-bottom: 1px solid #e0e0e1;
`;

export default () => (
  <Grid>
    <TopFeatures>
      <TopFeature value="950" label="предложений" />
      <TopFeature value="John McAslan + Partners" label="архитектор" />
      <TopFeature value="Группа «ПСН»" label="застройщик" />
    </TopFeatures>
  </Grid>
  );
