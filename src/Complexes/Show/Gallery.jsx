import React from 'react';
import styled from 'styled-components';

const Gallery = styled.section`
  padding-top: 1px;
  display: flex;
`;

const Picture = styled.img`margin-right: 0rem;`;

const Overlay = styled.div`
  margin-left: 7.5rem;
  margin-top: -2.675rem;
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

export default props =>
  (<div>
    <Gallery>
      {props.images.map(image =>
        (<Picture
          src={`https://yard-images.s3.amazonaws.com/${image.id}-512`}
          srcSet={
            `https://yard-images.s3.amazonaws.com/${image.id}-1024 2x,` +
            `https://yard-images.s3.amazonaws.com/${image.id}-2048 3x,`
          }
          alt={props.name}
        />),
      )}
    </Gallery>
    <Overlay>
      <Button>41 фотография</Button>
    </Overlay>
  </div>);
