// @flow

import React from 'react';
import styled from 'styled-components';
import ruplu from 'ruplu';
import type { ImageType } from '../types';

const plural = ruplu(['фотография', 'фотографии', 'фотографий']);

const Gallery = styled.section`
  padding-top: 1px;
  overflow: scroll;
  display: flex;
  position: relative;
`;

const Picture = styled.img`
  margin-right: 0rem;
  height: 400px;
  width: auto;
`;

const Overlay = styled.div`
  margin-left: 7.5rem;
  margin-top: -2.675rem;
  position: absolute;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 1.0;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #fff;
  background-color: #00779a;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

type Props = { name: string, images: Array<ImageType> };

export default function (props: Props) {
  const images = props.images || [];

  return (
    <div>
      <Gallery>
        {images.map(image =>
          (<Picture
            src={`https://images.jqestate.ru/${image.id}-jqestate-512`}
            srcSet={
              `https://images.jqestate.ru/${image.id}-jqestate-1024 2x,` +
              `https://images.jqestate.ru/${image.id}-jqestate}-2048 3x,`
            }
            alt={props.name}
          />),
        )}
      </Gallery>
      <Overlay>
        <Button>
          {plural(images.length, true)}
        </Button>
      </Overlay>
    </div>
  );
}
