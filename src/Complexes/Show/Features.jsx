import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
            от {props.price.min} до {props.price.max} млн ₽
          </Value>
          <Label>Безопасность</Label>
          <Value>
            {props.security}
          </Value>
        </List>
      </Col>
      <Col lg={4}>
        <List>
          <Label>Конструкция корпусов</Label>
          <Value>
            {props.construction}
          </Value>
          <Label>Площадь</Label>
          <Value>
            от {props.area.min} до {props.area.max} м²
          </Value>
          <Label>Высота потолков</Label>
          <Value>
            {props.height.min}–{props.height.max} м
          </Value>
          <Label>Обслуживание</Label>
          <Value>
            {props.maintenance} ₽ / м² / месяц
          </Value>
        </List>
      </Col>
      <Col lg={4}>
        <List>
          <Label>Начало строительства</Label>
          <Value>
            {props.startQuarter} квартал {props.startYear} года
          </Value>
          <Label>Конец строительства</Label>
          <Value>
            {props.commissioningQuarter} квартал {props.commissioningYear} года
          </Value>
          <Label>Наземная парковка</Label>
          <Value>
            {props.parking}
          </Value>
          <Label>Подземная парковка</Label>
          <Value>
            {props.underground}
          </Value>
        </List>
      </Col>
    </Row>
  </Grid>);
