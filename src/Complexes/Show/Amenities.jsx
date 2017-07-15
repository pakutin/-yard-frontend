import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SectionTitle from './SectionTitle';
import Amenity from './Amenity';

const Amenities = styled.div`margin-top: 0.875rem;`;

export default props =>
  (<Grid>
    {props.amenity && <SectionTitle>Инфраструктура</SectionTitle>}
    {props.amenity &&
      <Amenities>
        <Row>
          {props.amenities.map(amenity =>
            (<Col lg={2}>
              <Amenity amenity={amenity} />
            </Col>),
          )}
        </Row>
      </Amenities>}
  </Grid>);
