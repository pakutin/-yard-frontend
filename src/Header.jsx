// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from './Complexes/media';
import navLogo from './nav-logo.svg';

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #eaebf0;
`;

const Nav = styled.div`
  padding: 1rem 1rem;
  margin: 0 auto;
  max-width: 76rem;
  ${Media.md`
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
  `};
`;

const Logo = styled(Link)`
  ${Media.md`
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: flex-start;  
  `};
`;

const NavItems = styled.nav`
  display: none;
  ${Media.md`
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
  ${Media.md`
    margin-right: 2rem;
    :last-child {margin-right: 0;} 
    line-height: 1.0;
    font-size: 1rem;
    font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
    color: #3e4247;
    text-decoration: none; 
  `};
`;

export default () =>
  (<Header>
    <Nav>
      <Logo to="/complexes">
        <img src={navLogo} alt="Compass" width="179px" height="24px" />
      </Logo>
      <NavItems>
        <NavItem to="/">Купить</NavItem>
        <NavItem to="/">Снять</NavItem>
        <NavItem to="/">Наши агенты</NavItem>
      </NavItems>
    </Nav>
  </Header>);
