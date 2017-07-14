import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SectionTitle from './SectionTitle';
import Facility from './Facility';

const Facilities = styled.div`margin-top: 0.875rem;`;

export default props =>
  (<Grid>
    <SectionTitle>Инфраструктура</SectionTitle>
    <Facilities>
      <Row>
        {props.amenities.map(amenity =>
          (<Col lg={2}>
            <Facility name={amenity.id} />
          </Col>),
        )}
      </Row>
    </Facilities>
  </Grid>);
