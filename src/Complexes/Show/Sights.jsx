// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import type { LocationType } from '../types';
import media from '../../media';
import Map from './Map';
import Sight from './Sight';

const Sights = styled.section`
  max-width: 75rem;
  ${media.md`
  margin: -9.75rem auto 4rem auto;
  display: flex;
`};
`;

const Wrapper = styled.div`width: 100%;`;

const MapWrapper = styled.div`
  ${media.md`
  max-width: 36.875rem;
  box-shadow: 0 0 1.25rem 0.25rem rgba(0, 0, 0, 0.3);
  `};
`;

const SightList = styled.div`
  background-color: #fff;
  ${media.md`
  max-width: 36.875rem;
  box-shadow: 0 0 1.25rem 0.25rem rgba(0, 0, 0, 0.3);
  `};
`;

type Props = { location: LocationType };

export default (props: Props) =>
  (<Sights>
    <Wrapper>
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <MapWrapper>
              {props.location.latitude &&
                props.location.longitude &&
                <Map latitude={props.location.latitude} longitude={props.location.longitude} />}
            </MapWrapper>
          </Col>
          <Col xs={12} md={6}>
            <SightList>
              <Sight name="Красный Октябрь" distance="24 минуты, 6 км" />
              <Sight name="World Class" distance="2 минуты, 300 м" />
              <Sight name="Третьяковская галерея" distance="14 минут, 4 км" />
            </SightList>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Sights>);
