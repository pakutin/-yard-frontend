import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Header = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Complex = styled.div`margin-bottom: 1rem;`;

const Name = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.125;
  font-family: "Philosopher", "Iowan", serif;
  color: #3e4247;
`;

const Address = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.5;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #a9afb6;
`;

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  font-weight: 300;
  font-size: 0.625rem;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  text-decoration: none;
  color: #00779a;
  background: #fff;
  border: 1px solid #e0e0e1;
  border-radius: 2px;
  cursor: pointer;
`;

export default props =>
  (<Grid>
    <Header>
      <Complex>
        <Name>
          {props.name}
        </Name>
        <Address>
          Район {props.location.subLocalityName}, {props.location.street}, дом{' '}
          {props.location.house} • {props.location.postalCode}
        </Address>
      </Complex>
      <Button>В&nbsp;избранное</Button>
    </Header>
  </Grid>);
