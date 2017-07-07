import React from "react";
import styled from 'styled-components';
import { Grid, Col, Row } from "react-flexbox-grid";
import { Link } from 'react-router-dom';
import arrow from "./arrow.svg";

const Footer = styled.footer`
	padding: 2rem 7.5rem;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.2;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  background-color: #111;
`;

const Heading = styled.h4`
  margin-top: 0rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.4;
  color: #646971;
`;

const Detail = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #a9afb6;
`;

const DetailLast = styled(Detail) `
  margin-top: 1rem;
  margin-bottom: 0rem;
`;

const Nav = styled.nav`
  border-top: solid 2px #3e4247;
  padding-top: 1.125rem;
`;

const NavItem = styled(Link) `
  display: block;
  padding-top: 1rem;
  margin-bottom: 0rem;
  color: #ffffff;
  text-decoration: none;
`;

const NavItemLast = styled(NavItem) `
  margin-top: 1rem;
  margin-bottom: 0rem;
`;

const Caption = styled.p`
  margin-top: 6rem;
  margin-bottom: 0;
  font-size: 0.6875rem;
  font-weight: 300;
  line-height: 1.5;
  color: #a9afb6;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col xs={4}>
            <Heading>ООО «Ярд»</Heading>
            <Detail>ОГРН 1175074002531</Detail>
            <Detail>ИНН 5036165365</Detail>
            <DetailLast>+7 (999) 821-14-88</DetailLast>
          </Col>
          <Col xs={2}>
            <Nav>
              <Heading>Жилые комплексы</Heading>
              <NavItem to="/">ВТБ Арена Парк</NavItem>
              <NavItem to="/">Садовые кварталы</NavItem>
              <NavItem to="/">Резиденция Моне</NavItem>
              <NavItemLast to="/">Все ЖК Москвы
              <img className="link-arrow" src={arrow} />
              </NavItemLast>
            </Nav>
          </Col>
          <Col xs={2}>
            <Nav>
              <Heading>Компания</Heading>
              <NavItem to="/">Команда</NavItem>
              <NavItem to="/">О компании</NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={4} xs={8}>
            <Caption>
              Любая информация, представленная на&nbsp;данном сайте, носит
                исключительно информационный характер
                и&nbsp;ни&nbsp;при&nbsp;каких условиях не&nbsp;является
                публичной офертой, определяемой положениями статьи
                437&nbsp;ГК&nbsp;РФ. © ООО&nbsp;«Ярд», 2017
              </Caption>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};
