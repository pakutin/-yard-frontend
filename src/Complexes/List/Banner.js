import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import heroLogo from "./hero-logo.svg";

const Logo = styled.section`
  padding: 5rem 31.875rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  background-color: #161616;
`;

export default () => {
  return (
    <div>
      <Logo>
        <img
          src={heroLogo}
          alt="Compass Development"
          width="418.9px"
          height="131px"
        />
      </Logo>
      <Intro />
    </div>
  );
};
