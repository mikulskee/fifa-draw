import React from "react";
import styled, { css } from "styled-components";
import mainBg from "../images/main-bg.png";
import statsBg from "../images/stats-bg.png";

const Wrapper = styled.div`
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
    `}
  position: fixed;
  height: 100vh;
  width: 100vw;

  ${({ main }) =>
    main &&
    css`
      background-image: url(${mainBg});
    `}
  ${({ stats }) =>
    stats &&
    css`
      background-image: url(${statsBg});
    `}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Background = props => {
  return (
    <Wrapper main={props.main} stats={props.stats} flex={props.flex}>
      {props.children}
    </Wrapper>
  );
};

export default Background;
