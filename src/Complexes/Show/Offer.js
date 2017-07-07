import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin-top: 1.625rem;
  padding-top: 1.625rem;
  padding-left: 2rem;
  background-color: #fff;
    text-align: left;
}
`;

const Rooms = styled.h3`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-family: "Philosopher", "Iowan", serif;
  font-size: 1.25rem;
  line-height: 1.0;
}
`;

const Label = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
  line-height: 1.375;
  color: #a9afb6;
}
`;

const Value = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}
`;

const Button = styled.button`
  margin: 0.5rem 4rem 1.5rem 2rem;
  padding: 0.75rem 2rem;
  line-height: 1.0;
  font-family: "Fira Sans", "Helvetica Neue", "Lucida Sans Unicode", sans-serif;
  color: #fff;
  background-color: #000;
  border-radius: 2px;
  border: none;
  cursor: pointer;
}
`;

export default props =>
  <Card>
    <Rooms>
      {props.room}-комнатные квартиры
    </Rooms>
    <Label>Площадь</Label>
    <Value>
      от {props.space.min} до {props.space.max} м²
    </Value>
    <Label>Стоимость</Label>
    <Value>
      от {props.price.min} до {props.price.max} млн руб
    </Value>
    <Button>Посмотреть&nbsp;предложения</Button>
  </Card>;
