import React from 'react';
import styled from 'styled-components';
import media from '../../media';

const Intro = styled.section`
  text-align: center;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 50rem;
  ${media.md`
    padding: 4rem 0;
    font-size: 1rem;
  `};
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  ${media.md`
    margin-bottom: 0.625rem;
    font-size: 1.5rem;
  `};
  font-weight: 700;
  line-height: 1.4;
  color: #3e4247;
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.5;
  color: #3e4247;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 2px;
  line-height: 1.0;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #fff;
  background-color: #000000;
  border: none;
  cursor: pointer;
`;

export default () =>
  (<Intro>
    <Title>Discover Our New Developments</Title>
    <Text>
      Compass brings a modern approach to new development marketing and sales. From boutique rental
      conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.
    </Text>
    <Button>Contact The Team</Button>
  </Intro>);
