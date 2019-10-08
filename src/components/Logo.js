import React from "react";
import styled from "styled-components";
import logoWhite from "../images/logo-white-png.png";

const Wrapper = styled.div`
  height: 126px;
  img {
    display: block;
    height: 100%;
    margin: 0 auto;
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      <img src={logoWhite} alt="logo" />
    </Wrapper>
  );
};

export default Logo;
