import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto !important;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `}
  @media only screen and (min-width: 1024px) {
    ${({ overflow }) =>
      overflow &&
      css`
        overflow-y: auto;
      `}
  }

  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
  /* padding: 10px 0; */

  @media only screen and (min-width: 1024px) {
    padding: 20px 0;
  }
`;

const Background = props => {
  // useEffect(() => {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);

  //   window.addEventListener("resize", () => {
  //     let vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   });
  // });
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
