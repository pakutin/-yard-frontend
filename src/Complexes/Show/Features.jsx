// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import media from '../../media';
import { securityKinds, constructionKinds, quarters } from './Dictionary';
import type { ComplexType } from '../types';
import SectionTitle from './SectionTitle';

const Features = styled.div`
  margin: 0 auto;
  max-width: 76rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  overflow: scroll;
`;

const FeatureLists = styled.div`
  width: 76rem;
  margin-left: 1rem;
  ${media.md`
    margin: 0 auto;
  `};
  display: flex;
`;

const List = styled.dl`
  margin-bottom: 0;
  margin-right: 1rem;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 24rem;
  overflow: visible;
`;

const Label = styled.dt`
  margin-bottom: 0.5rem;
  flex: 0 0 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 1rem;
  color: #a9afb6;
`;

const Value = styled.dd`
  margin-left: auto;
  text-align: left;
  flex: 0 0 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 500;
  line-height: 1.5625;
`;

function formatPrice(price) {
  return (price / 1000000).toFixed(2);
}

function formatFloat(float) {
  return parseFloat(float).toFixed(2);
}

type Props = {
  complex: ComplexType,
};

export default function (props: Props) {
  const {
    units,
    statistics: {
      price: { from: { rub: priceFrom } = {}, to: { rub: priceTo } = {} } = {},
      totalArea: area = {},
    } = {},
    details = {},
    details: { ceilHeight: ceilings = {} } = {},
  } =
    props.complex || {};

  return (
    <div>
      <Grid fluid>
        <Features>
          <SectionTitle>Характеристики</SectionTitle>
        </Features>
      </Grid>
      <Wrapper>
        <FeatureLists>
          <Row>
            <Col lg={4}>
              <List>
                {units && <Label>Количество квартир</Label>}
                {units &&
                  <Value>
                    {units}
                  </Value>}
                <Label>Статус</Label>
                <Value>Квартиры</Value>
                <Label>Цены</Label>
                <Value>
                  от {formatPrice(priceFrom)} до {formatPrice(priceTo)} млн ₽
                </Value>
                <Label>Безопасность</Label>
                <Value>
                  {securityKinds[details.security]}
                </Value>
              </List>
            </Col>
            <Col lg={4}>
              <List>
                <Label>Конструкция корпусов</Label>
                <Value>
                  {constructionKinds[details.constructionKind]}
                </Value>
                <Label>Площадь</Label>
                <Value>
                  от {formatFloat(area.from)} до {formatFloat(area.to)} м²
                </Value>
                <Label>Высота потолков</Label>
                <Value>
                  {formatFloat(ceilings.from)}–{formatFloat(ceilings.to)} м
                </Value>
                <Label>Обслуживание</Label>
                <Value>
                  {details.maintenanceCosts} ₽ / м² / месяц
                </Value>
              </List>
            </Col>
            <Col lg={4}>
              <List>
                <Label>Начало строительства</Label>
                <Value>
                  {quarters[details.startQuarter]} квартал {details.startYear} года
                </Value>
                <Label>Конец строительства</Label>
                <Value>
                  {quarters[details.commissioningQuarter]} квартал {details.commissioningYear} года
                </Value>
                <Label>Наземная парковка</Label>
                <Value>
                  {details.parkings ? `${details.parkings} м/м` : 'Нет'}
                </Value>
                <Label>Подземная парковка</Label>
                <Value>
                  {details.undergroundGarages ? `${details.undergroundGarages} м/м` : 'Нет'}
                </Value>
              </List>
            </Col>
          </Row>
        </FeatureLists>
      </Wrapper>
    </div>
  );
}
