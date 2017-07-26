// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import ruplu from 'ruplu';
import TopFeature from './TopFeature';
import type { ComplexType } from '../types';
import Media from '../media';

const plural = ruplu(['предложение', 'предложения', 'предложений']);

const TopFeaturesGrid = styled(Grid)`
  margin: 0 auto;
  max-width: 76rem;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
`;

const TopFeatures = styled.section`
  padding-top: 1rem;
  margin-bottom: 2rem;
  ${Media.md`
    display: flex;
    padding-top: 1.75rem;
    padding-bottom: 1.625rem;
  `};
  font-family: "Philosopher", "Iowan", serif;
  border-bottom: 1px solid #e0e0e1;
`;

type Props = {
  complex: ComplexType,
};

export default function (props: Props) {
  const { statistics = {}, details = {} } = props.complex || {};
  return (
    <TopFeaturesGrid fluid>
      <TopFeatures>
        {statistics.propertiesCount &&
          <TopFeature
            value={statistics.propertiesCount}
            label={plural(statistics.propertiesCount.length, true)}
          />}
        {details.architect && <TopFeature value={details.architect} label="архитектор" />}
        {details.developer && <TopFeature value={details.developer} label="застройщик" />}
      </TopFeatures>
    </TopFeaturesGrid>
  );
}
