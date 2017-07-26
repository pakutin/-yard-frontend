import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import styled from 'styled-components';
import Media from '../media';

const Mapbox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoianVzdHVzZWJyYWluIiwiYSI6ImNpbHV1dWlmYTAwNmp2Zm02NjZkZmIybGkifQ.feSAgXjbU00mlAjBQyv1lQ',
});

const Map = styled.div`
  ${Media.md`
    height: 306px;
    width: 583px;
    box-shadow: 0 0 1.25rem 0.25rem rgba(0, 0, 0, 0.3);
  `};
`;

type Props = { longitude: string, latitude: string };

export default (props: Props) =>
  (<Map>
    <Mapbox
      style="mapbox://styles/mapbox/light-v9"
      zoom={[10]}
      containerStyle={{
        height: '100%',
        width: '100%',
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[parseFloat(props.latitude), parseFloat(props.longitude)]} />
      </Layer>
    </Mapbox>
  </Map>);
