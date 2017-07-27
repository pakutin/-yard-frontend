// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { ComplexType } from '../types';

const Card = styled(Link)`
  text-decoration: none;
`;

const Complex = styled.article`
  margin-bottom: 3rem;
  margin-left: 7.5rem;
  margin-right: 7.5rem;
  display: flex;
  background-color: #fff;
  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  }
`;

const Cover = styled.img`
  max-width: 491px;
  max-height: 350px;
`;

const Data = styled.div`
  width: 100%;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  border-bottom: 2px solid #646971;
`;

const Location = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: 2rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: "Monaco", "Lucida Console", monospace;
  line-height: 1.25;
  color: #646971;
`;

const Name = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: .5rem;
  margin-left: 2rem;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.4;
  color: #000000;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  margin-left: 2rem;
  margin-right: 5.375rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #3e4247;
`;

type Props = { complex: ComplexType };

export default (props: Props) =>
  (<div>
    {props.complex.slug &&
      <Card to={`/complexes/${props.complex.slug}`}>
        <Complex>
          {props.complex.image &&
            <Cover
              src={`https://yard-images.s3.amazonaws.com/${props.complex.image.id}-512`}
              srcSet={
                `https://yard-images.s3.amazonaws.com/${props.complex.image.id}-1024 2x,` +
                `https://yard-images.s3.amazonaws.com/${props.complex.image.id}-2048 3x,`
              }
              alt={props.complex.name}
            />}
          <Data>
            {props.complex.location &&
              props.complex.location.subLocalityName &&
              props.complex.location.street &&
              props.complex.location.house &&
              <Location>
                {`${props.complex.location.subLocalityName}, ${props.complex.location
                  .street}, ${props.complex.location.house}`}
              </Location>}
            <Name>
              {props.complex.name}
            </Name>
            <Description>
              {props.complex.shortDescription}
            </Description>
          </Data>
        </Complex>
      </Card>}
  </div>);
