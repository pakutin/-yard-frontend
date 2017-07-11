import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import navLogo from './nav-logo.svg';

const Header = styled.header`
  padding-left: 7.5em;
  padding-right: 5.5em;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #eaebf0;
`;

const Logo = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: flex-start;
`;

const Nav = styled.nav`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  line-height: 1.0;
  color: #3e4247;
`;

const NavItem = styled(Link)`
  margin-right: 2rem;
  line-height: 1.0;
  font-size: 1rem;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #3e4247;
  text-decoration: none;
`;

export default () => (
  <Header>
    <Logo>
      <img src={navLogo} alt="Compass" width="179px" height="24px" />
    </Logo>
    <Nav>
      <NavItem to="/">Купить</NavItem>
      <NavItem to="/">Снять</NavItem>
      <NavItem to="/">Наши агенты</NavItem>
    </Nav>
  </Header>
  );
