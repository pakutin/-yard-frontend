// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
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

const ButtonGrid = styled(Grid)`
  margin: 0 auto;
  max-width: 76rem;
`;

const Overlay = styled.div`
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
            src={`https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}-512`}
            srcSet={
              `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}-1024 2x,` +
              `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}}-2048 3x,`
            }
            alt={props.name}
          />),
        )}
      </Gallery>
      <ButtonGrid fluid>
        <Overlay>
          <Button>
            {plural(images.length, true)}
          </Button>
        </Overlay>
      </ButtonGrid>
    </div>
  );
}
