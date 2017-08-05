// @flow

import React from 'react';
import styled from 'styled-components';
import type { LocationType } from '../types';
import media from '../../media';
import Map from './Map';
import Sight from './Sight';

const Sights = styled.section`
  ${media.md`
  margin: -9.75rem auto 4rem auto;
  padding: 0 1rem;
  `};
`;

const MapCard = styled.div`
  ${media.md`
    padding-right: 1rem;
  `};
`;

const SightCard = styled.div`background-color: #fff;`;

const Shadow = styled.div`box-shadow: 0 0 1.25rem 0.25rem rgba(0, 0, 0, 0.3);`;

type Props = { location: LocationType };

export default (props: Props) =>
  (<Sights>
    <div className="altfbg">
      <div className="altfbg-row">
        <MapCard className="altfbg-col6-xs altfbg-col6-md">
          <Shadow>
            {props.location.latitude &&
              props.location.longitude &&
              <Map latitude={props.location.latitude} longitude={props.location.longitude} />}
          </Shadow>
        </MapCard>
        <SightCard className="altfbg-col6-xs altfbg-col6-md">
          <Shadow>
            <Sight name="Красный Октябрь" distance="24 минуты, 6 км" />
            <Sight name="World Class" distance="2 минуты, 300 м" />
            <Sight name="Третьяковская галерея" distance="14 минут, 4 км" />
          </Shadow>
        </SightCard>
      </div>
    </div>
  </Sights>);
