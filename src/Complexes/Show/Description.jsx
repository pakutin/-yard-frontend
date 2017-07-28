// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import media from '../../media';
import SectionTitle from './SectionTitle';

const Desciption = styled.section`
  margin: 2.625rem auto 2rem auto;
  padding-bottom: 0.5rem;
  max-width: 76rem;
  border-bottom: 1px solid #e0e0e1;
`;

const Text = styled.p`
  margin-top: 1rem;
  line-height: 1.5625;
  ${media.md`
  margin-top: 0;
  `};
`;

export default () =>
  (<Grid fluid>
    <Desciption>
      <Row>
        <Col xs={12} md={2}>
          <SectionTitle>Описание</SectionTitle>
        </Col>
        <Col xs={12} md={10}>
          <Text>
            ВТБ Арена Парк&nbsp;&mdash; современный квартал в&nbsp;10&nbsp;минутах езды
            от&nbsp;Кремля. Территория разделена на&nbsp;три зоны: жилой район, центральный стадион
            &laquo;Динамо&raquo; и&nbsp;большой спортивный парк.
            <br />
            <br />
            Жилой район&nbsp;&mdash; это 13&nbsp;корпусов: апартаменты, штаб-квартира
            &laquo;Динамо&raquo;, отель &laquo;Hyatt Regency Moscow&raquo; и&nbsp;четыре современных
            бизнес-центра. На&nbsp;территории&nbsp;&mdash; рестораны, спа-комплекс, фитнес-центр,
            химчистка, аптеки, магазины и&nbsp;отделения банков. В&nbsp;каждом корпусе работает
            консьерж и&nbsp;круглосуточная охрана. Для жителей оборудованы технические помещения под
            хранение колясок и&nbsp;велосипедов, комнаты для домашних животных и&nbsp;уютные
            вестибюли с&nbsp;мягкими креслами для встреч с&nbsp;друзьями и&nbsp;соседями.
            <br />
            <br />
            Сердце ВТБ Арена Парк&nbsp;&mdash; стадион. Под одной крышей расположились музей,
            торгово-развлекательный комплекс, подземная парковка для гостей и&nbsp;две крупные
            спортивные арены. Жизнь квартала сосредоточена в&nbsp;этой зоне: здесь можно сходить
            на&nbsp;концерт или фестиваль, поболеть за&nbsp;любимую команду и&nbsp;купить новую
            рубашку в&nbsp;торговом комплексе.
            <br />
            <br />
            Тихий жилой район от&nbsp;шумного стадиона отделяет Парк Физкультуры и&nbsp;Отдыха.
            Здесь каждый найдет занятие: для детей оборудованы игровые зоны, для
            подростков&nbsp;&mdash; спортивные площадки на&nbsp;открытом воздухе, для
            взрослых&nbsp;&mdash; велосипедные дорожки и&nbsp;зоны отдыха, где можно подышать свежим
            воздухом во&nbsp;время рабочего перерыва.
          </Text>
        </Col>
      </Row>
    </Desciption>
  </Grid>);
