import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  overflow-y: auto;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `}
  ${({ overflow }) =>
    overflow &&
    css`
      overflow-y: auto;
    `}

  height: 100%;
  width: 100%;
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
  padding: 20px 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Background = props => {
  return (
    <Wrapper
      overflow={props.overflow}
      flex={props.flex}
      className={props.className}
    >
      {props.children}
    </Wrapper>
  );
};

export default Background;
