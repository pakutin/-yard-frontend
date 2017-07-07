import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import SectionTitle from "./SectionTitle";

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

export default () => {
  return (
    <Grid>
      <SectionTitle>Характеристики</SectionTitle>
      <Row>
        <Col lg={4}>
          <List>
            <Label>Количество квартир</Label>
            <Value>1 503</Value>
            <Label>Статус</Label>
            <Value>Квартиры</Value>
            <Label>Цены</Label>
            <Value>от 5.3 до 143.5 млн</Value>
            <Label>Безопасность</Label>
            <Value>Охраняемая территория</Value>
          </List>
        </Col>
        <Col lg={4}>
          <List>
            <Label>Конструкция корпусов</Label>
            <Value>монолит</Value>
            <Label>Площадь</Label>
            <Value>от 50 до 154 м²</Value>
            <Label>Высота потолков</Label>
            <Value>3.45 − 5 м</Value>
            <Label>Обслуживание</Label>
            <Value>1 200 руб / м² / месяц</Value>
          </List>
        </Col>
        <Col lg={4}>
          <List>
            <Label>Начало строительства</Label>
            <Value>I квартал 2012 года</Value>
            <Label>Конец строительства</Label>
            <Value>IV квартал 2018 года</Value>
            <Label>Наземная парковка</Label>
            <Value>1 500 м/м</Value>
            <Label>Подземная парковка</Label>
            <Value>Нет</Value>
          </List>
        </Col>
      </Row>
    </Grid>
  );
};
