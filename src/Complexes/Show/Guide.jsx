// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../media';

const Background = styled.section`background-color: #3e4247;`;

const Guide = styled.div`
  ${media.md`
  padding-bottom: 13.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  `};
`;

const Text = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-left: 1rem;
  order: 2;
  ${media.md`
    margin-top: 11rem;
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 1rem;
    order: 1;
  `};
  font-family: "Philosopher", "Iowan", serif;
`;

const District = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #a9afb6;
  ${media.lg`
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
  ${media.lg`
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

const Cover = styled.div`
  order: 1;
  ${media.md`
    order: 2;
  `};
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
  ${media.md`
    margin-top: 4rem;
  `};
`;

type Props = {
  district: string,
  tagline: string,
  link: string,
};

const url: string = process.env.PUBLIC_URL || '';

export default (props: Props) =>
  (<Background>
    <Guide className="altfbg">
      <div className="altfbg-row">
        <Text className="altfbg-col6-xs altfbg-col6-md">
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
        <Cover className="altfbg-col6-xs altfbg-col6-md">
          <Picture
            alt=""
            src={`${url}/polyankaPhoto.jpg`}
            srcSet={`${`${url}/polyankaPhoto@2x.jpg`} 2x, ${`${url}/polyankaPhoto@3x.jpg`} 3x`}
          />
        </Cover>
      </div>
    </Guide>
  </Background>);
