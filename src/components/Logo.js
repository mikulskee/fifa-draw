import React from "react";
import styled, { css } from "styled-components";
import logoWhite from "../images/logo-white-png.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ big }) =>
    big &&
    css`
      width: 60%;
      border-bottom: 2px solid white;
      margin: 10px auto;
      height: 20%;
      min-height: 80px;

      @media only screen and (min-width: 1024px) {
        min-height: 160px;

        width: 70%;
        padding-top: 40px;
      }
    `}

  ${({ small }) =>
    small &&
    css`
      margin-left: 20px;
      /* @media only screen and (min-width: 1024px) {
        width: 70%;
        padding-top: 40px;
      } */
    `}

  img {
    display: block;
    height: 30px;
    margin: 0;
    @media only screen and (min-width: 1024px) {
      height: 55px;
      margin: 0 auto;
    }
    ${({ big }) =>
      big &&
      css`
        height: 70px;
        @media only screen and (min-width: 1024px) {
          height: 105px;
        }
      `}
  }
`;

const Logo = props => {
  return (
    <Wrapper big={props.big} small={props.small}>
      <img big={props.big} src={logoWhite} alt="logo" />
    </Wrapper>
  );
};

export default Logo;
