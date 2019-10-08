import React from "react";
import styled, { css } from "styled-components";
import logoWhite from "../images/logo-white-png.png";

const Wrapper = styled.div`
  width: 171px;
  ${({ big }) =>
    big &&
    css`
      width: 70%;
      border-bottom: 2px solid white;
      margin: 0 auto;
      padding-top: 40px;
    `}

  img {
    display: block;
    height: 76px;
    margin: 0 auto;
    ${({ big }) =>
      big &&
      css`
        height: 126px;
      `}
  }
`;

const Logo = props => {
  return (
    <Wrapper big={props.big}>
      <img big={props.big} src={logoWhite} alt="logo" />
    </Wrapper>
  );
};

export default Logo;
