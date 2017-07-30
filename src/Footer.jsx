// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import media from './media';
import arrow from './arrow.svg';

const Footer = styled.footer`
  padding: 2rem 0 3rem 0;
  ${media.md`
    padding-bottom: 2rem;
    display: flex;
  `};
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.2;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  background-color: #111;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 76rem;
`;

const Heading = styled.h4`
  margin-top: 1px;
  margin-bottom: 0.75rem;
  font-weight: 700;
  line-height: 1.4;
  color: #646971;
`;

const Detail = styled.p`
  margin-top: 0;
  margin-bottom: 0.875rem;
  color: #a9afb6;
`;

const DetailLast = styled(Detail)`
  margin-top: 1.375rem;
  margin-bottom: 3rem;
  ${media.md`
    margin-bottom: 0rem;
  `};
`;

const Nav = styled.nav`
  border-top: solid 2px #3e4247;
  padding-top: 1.125rem;
`;

const NavHeading = styled(Heading)`
  margin-top: -1px;
`;

const NavItem = styled(Link)`
  display: block;
  margin-top: 0;
  margin-bottom: 0.875rem;
  color: #ffffff;
  text-decoration: none;
`;

const NavItemLast = styled(NavItem)`
  margin-top: 1.25rem;
  margin-bottom: 3rem;
  ${media.md`
    margin-bottom: 0;
  `};
`;

const Caption = styled.p`
  margin-top: 3rem;
  ${media.md`
    margin-top: 6.25rem;
  `};
  font-size: 0.6875rem;
  font-weight: 300;
  line-height: 1.5;
  color: #a9afb6;
`;

export default () =>
  (<Footer>
    <Grid fluid>
      <Wrapper>
        <Row>
          <Col xs={12} md={4}>
            <Heading>ООО «Ярд»</Heading>
            <Detail>ОГРН 1175074002531</Detail>
            <Detail>ИНН 5036165365</Detail>
            <DetailLast>+7 (999) 821-14-88</DetailLast>
          </Col>
          <Col xs={12} md={2}>
            <Nav>
              <NavHeading>Жилые комплексы</NavHeading>
              <NavItem to="/">ВТБ Арена Парк</NavItem>
              <NavItem to="/">Садовые кварталы</NavItem>
              <NavItem to="/">Резиденция Моне</NavItem>
              <NavItemLast to="/">
                Все ЖК Москвы&nbsp; <img src={arrow} alt="arrow" />
              </NavItemLast>
            </Nav>
          </Col>
          <Col xs={12} md={2}>
            <Nav>
              <NavHeading>Компания</NavHeading>
              <NavItem to="/">Команда</NavItem>
              <NavItem to="/">О компании</NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col xs={12} mdOffset={4} md={8}>
            <Caption>
              Любая информация, представленная на&nbsp;данном сайте, носит исключительно
              информационный характер и&nbsp;ни&nbsp;при&nbsp;каких условиях не&nbsp;является
              публичной офертой, определяемой положениями статьи 437&nbsp;ГК&nbsp;РФ. ©
              ООО&nbsp;«Ярд», 2017
            </Caption>
          </Col>
        </Row>
      </Wrapper>
    </Grid>
  </Footer>);
