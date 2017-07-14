import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SectionTitle from './SectionTitle';
import Facility from './Facility';

const Facilities = styled.div`margin-top: 0.875rem;`;

export default props =>
  (<Grid>
    {props.name && <SectionTitle>Инфраструктура</SectionTitle>}
    {props.name &&
      <Facilities>
        <Row>
          {props.amenities.map(amenity =>
            (<Col lg={2}>
              <Facility name={amenity} />
            </Col>),
          )}
        </Row>
      </Facilities>}
  </Grid>);
