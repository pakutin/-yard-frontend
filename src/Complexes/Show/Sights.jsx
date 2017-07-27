// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Sight from './Sight';

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0 1.25rem 0.25rem rgba(0, 0, 0, 0.3);
`;

const Sights = styled.section`
  margin-top: -9.75rem;
  margin-bottom: 4rem;
  display: flex;
`;

const MapView = styled.img`
  margin-top: 1px;
  display: block;
  box-shadow: 0 0 1.25rem 0.25rem rgba(0, 0, 0, 0.3);
`;

const url: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Sights>
    <Grid>
      <Row>
        <Col lg={6}>
          <MapView
            alt=""
            className="sights-map"
            src={`${url}/map.png`}
            srcSet={`${`${url}/map@2x.png`} 2x, ${`${url}/map@3x.png`} 3x`}
          />
        </Col>
        <Col lg={6}>
          <Card>
            <Sight name="Красный Октябрь" distance="24 минуты, 6 км" />
            <Sight name="World Class" distance="2 минуты, 300 м" />
            <Sight name="Третьяковская галерея" distance="14 минут, 4 км" />
          </Card>
        </Col>
      </Row>
    </Grid>
  </Sights>);
