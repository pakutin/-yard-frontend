// @flow

import React from 'react';
import styled from 'styled-components';
import Media from '../media';
import Intro from './Intro';
import heroLogo from './hero-logo.svg';

const Logo = styled.section`
  display: none;
  ${Media.md`
    padding: 5rem 31.875rem;
    display: flex;
    justify-content: center;
    background-color: #161616;
  `};
`;

export default () =>
  (<div>
    <Logo>
      <img src={heroLogo} alt="Compass Development" width="418.9px" height="131px" />
    </Logo>
    <Intro />
  </div>);
