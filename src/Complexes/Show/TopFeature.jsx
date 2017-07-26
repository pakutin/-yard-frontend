// @flow

import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Media from '../media';

const TopFeature = styled.div`
  padding-bottom: 1rem;
  ${Media.md`
    padding-right: 3rem;
    padding-bottom: 0;
  `};
`;

const Caption = styled.small`
  padding-top: 1rem;
  padding-bottom: 1.75rem;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.5;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #a9afb6;
`;

type Props = { value: string, label: string };

export default (props: Props) =>
  (<TopFeature>
    <SectionTitle>
      {props.value}
      <br />
      <Caption>
        {props.label}
      </Caption>
    </SectionTitle>
  </TopFeature>);
