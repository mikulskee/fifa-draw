import React from "react";
import styled, { css } from "styled-components";
import mainBg from "../images/main-bg.png";

const Wrapper = styled.div`
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
    `}
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${mainBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Background = props => {
  return <Wrapper flex={props.flex}>{props.children}</Wrapper>;
};

export default Background;
