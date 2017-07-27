// @flow

import React from 'react';
import styled from 'styled-components';
import { media } from '../media';
import heroLogo from './hero-logo.svg';

const Logo = styled.section`
  display: none;
  ${media.md`
    padding: 5rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: #161616;
  `};
`;

export default () =>
  (<Logo>
    <img src={heroLogo} alt="Compass Development" width="418.9px" height="131px" />
  </Logo>);
