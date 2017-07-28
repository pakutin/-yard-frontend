// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import media from '../../media';

const GuideWrapper = styled.div`background-color: #3e4247;`;

const Guide = styled.section`
  margin: 0 auto;
  padding-bottom: 0;
  ${media.md`
  padding-bottom: 13.5rem;
  `};
  max-width: 75rem;
`;

const GuideGrid = styled(Grid)`
  padding-right: 0 !important;
  padding-left: 0 !important;
  width: 100%;
`;

const Text = styled.div`
  margin-left: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  ${media.md`
    margin-top: 11rem;
    margin-bottom: 0;
  `};
  font-family: "Philosopher", "Iowan", serif;
`;

const District = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #a9afb6;
  ${media.md`
    font-size: 1.5rem;
    margin-bottom: 2.75rem;
  `};
`;

const Tagline = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 2rem;
  line-height: 1.25;
  font-weight: 700;
  color: #ffffff;
  ${media.md`
    margin-bottom: 3rem;
    font-size: 3rem;
  `};
`;

const GuideLink = styled(Link)`
  font-size: 1rem;
  line-height: 1.1875;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #00779a;
  text-decoration: none;
`;

const Cover = styled.img`
  width: 100%;
  height: auto;
  ${media.md`
  margin-top: 4rem;
    padding-top: 1px;
  `};
`;

type Props = {
  district: string,
  tagline: string,
  link: string,
};

const url: string = process.env.PUBLIC_URL || '';

export default (props: Props) =>
  (<GuideWrapper>
    <Guide>
      <GuideGrid fluid>
        <Row>
          <Col xs={12} md={6} first="md">
            <Text>
              <District>
                {props.district}
              </District>
              <Tagline>
                {props.tagline}
              </Tagline>
              <GuideLink to="/">
                {props.link} →
              </GuideLink>
            </Text>
          </Col>
          <Col xs={12} md={6} first="xs">
            <Cover
              alt=""
              src={`${url}/polyankaPhoto.jpg`}
              srcSet={`${`${url}/polyankaPhoto@2x.jpg`} 2x, ${`${url}/polyankaPhoto@3x.jpg`} 3x`}
            />
          </Col>
        </Row>
      </GuideGrid>
    </Guide>
  </GuideWrapper>);
