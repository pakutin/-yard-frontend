import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { securityKinds, constructionKinds, quarters } from './Dictionary';
import SectionTitle from './SectionTitle';

const List = styled.dl`
  margin-bottom: 0;
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

export default props =>
  (<Grid>
    <SectionTitle>Характеристики</SectionTitle>
    <Row>
      <Col lg={4}>
        <List>
          {props.flats && <Label>Количество квартир</Label>}
          {props.flats &&
            <Value>
              {props.flats}
            </Value>}
          <Label>Статус</Label>
          <Value>Квартиры</Value>
          <Label>Цены</Label>
          <Value>
            от {(props.statistics.price.from.rub / 1000000).toFixed(2)} до{' '}
            {(props.statistics.price.to.rub / 1000000).toFixed(2)} млн ₽
          </Value>
          <Label>Безопасность</Label>
          <Value>
            {securityKinds[props.details.security]}
          </Value>
        </List>
      </Col>
      <Col lg={4}>
        <List>
          <Label>Конструкция корпусов</Label>
          <Value>
            {constructionKinds[props.details.constructionKind]}
          </Value>
          <Label>Площадь</Label>
          <Value>
            от {props.statistics.totalArea.from.toFixed(0)} до{' '}
            {props.statistics.totalArea.to.toFixed(0)} м²
          </Value>
          <Label>Высота потолков</Label>
          <Value>
            {props.details.ceilHeight.from.toFixed(2)}–{props.details.ceilHeight.to.toFixed(2)} м
          </Value>
          <Label>Обслуживание</Label>
          <Value>
            {props.details.maintenanceCosts} ₽ / м² / месяц
          </Value>
        </List>
      </Col>
      <Col lg={4}>
        <List>
          <Label>Начало строительства</Label>
          <Value>
            {quarters[props.details.startQuarter]} квартал {props.details.startYear} года
          </Value>
          <Label>Конец строительства</Label>
          <Value>
            {quarters[props.details.commissioningQuarter]} квартал {props.details.commissioningYear}{' '}
            года
          </Value>
          <Label>Наземная парковка</Label>
          <Value>
            {props.details.parkings ? `${props.details.parkings} м/м` : 'Нет'}
          </Value>
          <Label>Подземная парковка</Label>
          <Value>
            {props.details.undergroundGarages ? `${props.details.undergroundGarages} м/м` : 'Нет'}
          </Value>
        </List>
      </Col>
    </Row>
  </Grid>);
