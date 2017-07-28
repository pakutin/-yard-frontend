// @flow

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import styled from 'styled-components';
import media from '../../media';

const Mapbox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY,
  scrollZoom: false,
});

const Map = styled.div`
  height: 10.375rem;
  ${media.md`
    height: 19.125rem;
    box-shadow: 0 0 1.25rem 0.25rem rgba(0, 0, 0, 0.3);
  `};
`;

type Props = { longitude: string, latitude: string };

export default (props: Props) => {
  const longitude = props.longitude;
  const latitude = props.latitude;

  return (
    <Map>
      <Mapbox
        style="mapbox://styles/mapbox/light-v9"
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
        zoom={[14]}
        center={[longitude, latitude]}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={{
            'icon-image': 'marker-15',
          }}
        >
          <Feature coordinates={[longitude, latitude]} />
        </Layer>
      </Mapbox>
    </Map>
  );
};
