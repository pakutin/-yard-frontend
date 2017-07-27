// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SectionTitle from './SectionTitle';

const Desciption = styled.section`
  margin-top: 2.625rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e1;
`;

const Text = styled.p`
  margin-top: 0;
  line-height: 1.5625;
`;

type Props = { fullDescription: string };

export default (props: Props) =>
  (<Grid>
    <Desciption>
      <Row>
        <Col lg={2}>
          <SectionTitle>Описание</SectionTitle>
        </Col>
        <Col lg={10}>
          <Text>
            {props.fullDescription}
          </Text>
        </Col>
      </Row>
    </Desciption>
  </Grid>);
