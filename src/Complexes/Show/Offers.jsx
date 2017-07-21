// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SectionTitle from './SectionTitle';
import Offer from './Offer';

const Offers = styled.section`
  margin-top: 3.5rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5625;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #3e4247;
  background-color: #f4f5f9;
`;

export default ({ name }) =>
  (<Offers>
    <Grid>
      <SectionTitle>
        Предложения в ЖК «{name}»
      </SectionTitle>
      <Row>
        <Col lg={4}>
          <Offer room={1} space={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
        </Col>
        <Col lg={4}>
          <Offer room={2} space={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
        </Col>
        <Col lg={4}>
          <Offer room={3} space={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
        </Col>
      </Row>
    </Grid>
  </Offers>);
