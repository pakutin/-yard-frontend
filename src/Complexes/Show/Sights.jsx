// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import type { LocationType } from '../types';
import media from '../../media';
import Map from './Map';
import Sight from './Sight';

const Sights = styled.section`
  ${media.lg`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: -9.75rem;
  margin-bottom: 4rem;
  display: flex;
`};
`;

const SightList = styled.div`
  background-color: #fff;
  ${media.lg`
  box-shadow: 0 0 1.25rem 0.25rem rgba(0, 0, 0, 0.3);
  `};
`;

type Props = { location: LocationType };

export default (props: Props) =>
  (<Sights>
    <Grid>
      <Row>
        <Col xs={12} lg={6}>
          {props.location.latitude &&
            props.location.longitude &&
            <Map latitude={props.location.latitude} longitude={props.location.longitude} />}
        </Col>
        <Col xs={12} lg={6}>
          <SightList>
            <Sight name="Красный Октябрь" distance="24 минуты, 6 км" />
            <Sight name="World Class" distance="2 минуты, 300 м" />
            <Sight name="Третьяковская галерея" distance="14 минут, 4 км" />
          </SightList>
        </Col>
      </Row>
    </Grid>
  </Sights>);
