// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import media from '../../media';
import SectionTitle from './SectionTitle';
import Offer from './Offer';

const Offers = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${media.md`
    margin-top: 3.5rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    text-align: center;
  `};
  font-size: 1rem;
  line-height: 1.5625;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #3e4247;
  background-color: #f4f5f9;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  overflow: scroll;
`;

const OffersList = styled.div`
  width: 76rem;
  margin: 0 auto;
  display: flex;
`;

type Props = { name: string };

export default (props: Props) =>
  (<Offers>
    <Grid fluid>
      <SectionTitle>
        Предложения в&nbsp;ЖК&nbsp;«{props.name}»
      </SectionTitle>
    </Grid>
    <Wrapper>
      <Grid fluid>
        <OffersList>
          <Offer room={1} space={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
          <Offer room={2} space={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
          <Offer room={3} space={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
        </OffersList>
      </Grid>
    </Wrapper>
  </Offers>);
