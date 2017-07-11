import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.125;
  font-family: "Philosopher", "Iowan", serif;
  color: #3e4247;
`;

export default props =>
  (<SectionTitle>
    {props.children}
  </SectionTitle>);
