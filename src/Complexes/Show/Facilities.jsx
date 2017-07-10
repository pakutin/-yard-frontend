import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SectionTitle from './SectionTitle';
import Facility from './Facility';

const Facilities = styled.div`margin-top: 0.4rem;`;

export default () => (
  <Grid>
    <SectionTitle>Инфраструктура</SectionTitle>
    <Facilities>
      <Row>
        <Col lg={2}>
          <Facility>Бассейн</Facility>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Детский сад</Facility>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Частная школа</Facility>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Бассейн</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Детский сад</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Частная школа</Facility>
        </Col>
      </Row>
    </Facilities>
  </Grid>
  );
