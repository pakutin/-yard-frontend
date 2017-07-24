// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { ComplexesType } from '../types';
import Media from '../media';

const Card = styled(Link)`
  text-decoration: none;
`;

const Complex = styled.article`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  ${Media.md`
    margin-left: 4rem;
    margin-right: 4rem;
    margin-bottom: 3rem;
    display: flex;
  `};
  ${Media.lg`
    margin-left: 7.5rem;
    margin-right: 7.5rem;
  `};
  background-color: #fff;
  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  }
`;

const Cover = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0;
  padding-bottom: 0;
  ${Media.md`
    max-width: 491px;
    max-height: 350px;
  `};
`;

const Data = styled.div`
  width: 100%;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  border-bottom: 2px solid #646971;
`;

const Location = styled.p`
  margin: 1rem 1rem 1.5rem 1rem;
  ${Media.md`
    margin-top: 1.5rem;
    margin-left: 2rem;
  `};
  text-transform: uppercase;
  font-size: 1rem;
  font-family: "Monaco", "Lucida Console", monospace;
  line-height: 1.25;
  color: #646971;
`;

const Name = styled.h3`
  margin: 1rem 1rem 1.5rem 1rem;
  font-size: 2rem;
  ${Media.md`
    margin-bottom: .5rem;
    margin-left: 2rem;
    font-size: 2.5rem;
  `};
  font-weight: 700;
  line-height: 1.4;
  color: #000000;
`;

const Description = styled.p`
  margin: 1rem 1rem 1.5rem 1rem;
  ${Media.md`
    margin: 0.5rem 4rem 0 2rem;
  `};
  ${Media.lg`
    margin: 0.5rem 5.375rem 0 2rem;
  `};
  font-size: 1rem;
  line-height: 1.5;
  color: #3e4247;
`;

type Props = { complex: ComplexesType };

export default (props: Props) =>
  (<Card to={`/complexes/${props.complex.slug}`}>
    <Complex>
      <Cover
        src={`https://yard-images.s3.amazonaws.com/${props.complex.image.id}-512`}
        srcSet={
          `https://yard-images.s3.amazonaws.com/${props.complex.image.id}-1024 2x,` +
          `https://yard-images.s3.amazonaws.com/${props.complex.image.id}-2048 3x,`
        }
        alt={props.complex.name}
      />
      <Data>
        <Location>
          {`${props.complex.location.subLocalityName}, ${props.complex.location.street}, ${props
            .complex.location.house}`}
        </Location>
        <Name>
          {props.complex.name}
        </Name>
        <Description>
          {props.complex.shortDescription}
        </Description>
      </Data>
    </Complex>
  </Card>);
