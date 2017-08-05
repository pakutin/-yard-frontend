// @flow

import React from 'react';
import styled from 'styled-components';
import media from '../../media';

const Sight = styled.div`
  padding-left: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.625rem;
  ${media.md`
    padding-left: 1.5rem;
  `};
  border-bottom: solid 1px #e0e0e1;
`;

const Name = styled.p`
  margin-top: -1px;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #3e4247;
`;

const Distance = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.38;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #a9afb6;
`;

type Props = { name: string, distance: string };

export default (props: Props) =>
  (<Sight>
    <Name>
      {props.name}
    </Name>
    <Distance>
      {props.distance}
    </Distance>
  </Sight>);
