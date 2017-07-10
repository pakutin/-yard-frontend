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

const Data = styled.div`
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
  (<Card to={`/complex${props.id}`}>
    <Complex>
      <img
        src={`${process.env.PUBLIC_URL}./img1.jpg`}
        srcSet={`${`${process.env.PUBLIC_URL}./img1@2x.jpg`} 2x, 
            ${`${process.env.PUBLIC_URL}./img1@3x.jpg`} 3x`}
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
          {props.children}
        </Description>
      </Data>
    </Complex>
  </Card>);
