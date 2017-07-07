import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Guide = styled.section`
  padding-bottom: 13.5rem;
  background-color: #3e4247;
`;

const Text = styled.div`
  margin-top: 11rem;
  font-family: "Philosopher", "Iowan", serif;
`;

const District = styled.p`
  margin-bottom: 2.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #a9afb6;
`;

const Tagline = styled.p`
  margin-top: 0;
  margin-bottom: 3rem;
  font-size: 3rem;
  line-height: 1.25;
  font-weight: 700;
  color: #ffffff;
`;

const GuideLink = styled(Link)`
  font-size: 1rem;
  line-height: 1.1875;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #00779a;
  text-decoration: none;
`;

const Cover = styled.img`
  margin-top: 4rem;
  padding-top: 1px;
`;

export default props =>
  <Guide>
    <Grid>
      <Row>
        <Col lg={6}>
          <Text>
            <District>
              {props.district}
            </District>
            <Tagline>
              {props.tagline}
            </Tagline>
            <GuideLink to="/">
              {props.link + "→"}
            </GuideLink>
          </Text>
        </Col>
        <Col lg={6}>
          <Cover
            alt=""
            src={process.env.PUBLIC_URL + "./polyankaPhoto.jpg"}
            srcSet={`${process.env.PUBLIC_URL +
              "./polyankaPhoto@2x.jpg"} 2x, ${process.env.PUBLIC_URL +
              "./polyankaPhoto@3x.jpg"} 3x`}
          />
        </Col>
      </Row>
    </Grid>
  </Guide>;
