// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from './media';
import navLogo from './nav-logo.svg';

const Header = styled.header`
  padding: 1rem 1rem;
  margin-bottom: 0;
  ${media.md`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 75rem;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #eaebf0;
  `};
`;

const Logo = styled(Link)`
  ${media.md`
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: flex-start;  
  `};
`;

const Nav = styled.nav`
  display: none;
  ${media.md`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
    font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
    line-height: 1.0;
    color: #3e4247;
  `};
`;

const NavItem = styled(Link)`
  ${media.md`
    margin-right: 2rem;
    &:last-child {margin-right: 0;} 
    line-height: 1.0;
    font-size: 1rem;
    font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
    color: #3e4247;
    text-decoration: none; 
  `};
`;

export default () =>
  (<Header>
    <Logo to="/complexes">
      <img src={navLogo} alt="Compass" width="179px" height="24px" />
    </Logo>
    <Nav>
      <NavItem to="/">Купить</NavItem>
      <NavItem to="/">Снять</NavItem>
      <NavItem to="/">Наши агенты</NavItem>
    </Nav>
  </Header>);
