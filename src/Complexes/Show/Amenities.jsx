// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import type { AmenityType } from '../types';
import SectionTitle from './SectionTitle';

const List = styled.div`margin-top: 0.875rem;`;

const Amenity = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.375;
`;

type Props = {
  amenities: Array<AmenityType>,
};

export default function (props: Props) {
  const amenities = props.amenities || [];
  return (
    <Grid>
      <SectionTitle>Инфраструктура</SectionTitle>
      <List>
        <Row>
          {amenities.map(amenity =>
            (<Col lg={2}>
              <Amenity>
                {amenity}
              </Amenity>
            </Col>),
          )}
        </Row>
      </List>
    </Grid>
  );
}
