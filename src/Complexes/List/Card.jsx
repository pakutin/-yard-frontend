import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export default props =>
  (<Card to={`/${props.slug}`}>
    <Complex>
      <Cover
        src={`https://yard-images.s3.amazonaws.com/${props.image}-512`}
        srcSet={
          `https://yard-images.s3.amazonaws.com/${props.image}-1024 2x,` +
          `https://yard-images.s3.amazonaws.com/${props.image}-2048 3x,`
        }
        alt={props.name}
      />
      <Data>
        <Location>
          {props.location}
        </Location>
        <Name>
          {props.name}
        </Name>
        <Description>
          {props.text}
        </Description>
      </Data>
    </Complex>
  </Card>);
