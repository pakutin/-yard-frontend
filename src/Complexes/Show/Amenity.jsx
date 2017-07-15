import React from 'react';
import styled from 'styled-components';

const Amenity = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.375;
`;

export default props =>
  (<Amenity>
    {props.amenity}
  </Amenity>);
