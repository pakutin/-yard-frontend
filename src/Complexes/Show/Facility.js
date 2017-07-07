import React from "react";
import styled from "styled-components";

const Facility = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.375;
`;

export default props =>
  <Facility>
    {props.children}
  </Facility>;
