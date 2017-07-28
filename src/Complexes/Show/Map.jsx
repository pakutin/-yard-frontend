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
  ${media.md`
    height: 306px;
    width: 583px;
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
        containerStyle={{
          height: '19rem',
          width: '100%',
        }}
        style="mapbox://styles/mapbox/light-v9"
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
