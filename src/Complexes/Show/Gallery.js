import React from "react";
import styled from "styled-components";

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

export default () => {
  return (
    <div>
      <Gallery>
        <Picture
          alt=""
          src={process.env.PUBLIC_URL + "./complex1.jpg"}
          srcSet={`${process.env.PUBLIC_URL + "./complex1@2x.jpg"} 2x, ${process
            .env.PUBLIC_URL + "./complex1@3x.jpg"} 3x`}
        />
        <Picture
          alt=""
          src={process.env.PUBLIC_URL + "./complex2.jpg"}
          srcSet={`${process.env.PUBLIC_URL + "./complex2@2x.jpg"} 2x, ${process
            .env.PUBLIC_URL + "./complex2@3x.jpg"} 3x`}
        />
        <Picture
          alt=""
          src={process.env.PUBLIC_URL + "./complex3.jpg"}
          srcSet={`${process.env.PUBLIC_URL + "./complex3@2x.jpg"} 2x, ${process
            .env.PUBLIC_URL + "./complex3@3x.jpg"} 3x`}
        />
        <Picture
          alt=""
          src={process.env.PUBLIC_URL + "./complex4.jpg"}
          srcSet={`${process.env.PUBLIC_URL + "./complex4@2x.jpg"} 2x, ${process
            .env.PUBLIC_URL + "./complex4@3x.jpg"} 3x`}
        />
        <Picture
          alt=""
          src={process.env.PUBLIC_URL + "./complex5.jpg"}
          srcSet={`${process.env.PUBLIC_URL + "./complex5@2x.jpg"} 2x, ${process
            .env.PUBLIC_URL + "./complex5@3x.jpg"} 3x`}
        />
      </Gallery>
      <Overlay>
        <Button>41 фотография</Button>
      </Overlay>
    </div>
  );
};
