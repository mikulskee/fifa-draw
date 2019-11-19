import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  list-style: none;
  justify-content: center;
  align-items: center;
  ${({ newcup }) =>
    newcup &&
    css`
      width: 60%;
      height: 40%;
    `}
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      width: 80%;
      flex-flow: wrap;
      justify-content: space-around;
    `}
  li {
    margin: 10px;
    ${({ column }) =>
      column &&
      css`
        width: 50%;
        margin: 20px 0;
      `}
    div {
      position: relative;
      color: #19ff00;
      &.selected {
        svg {
          opacity: 1;
        }
        img {
          opacity: 0.3;
        }
      }
      svg {
        position: absolute;
        pointer-events: none;
        opacity: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      img {
        position: relative;
        display: block;
        height: 60px;
        cursor: pointer;
        margin: 0 auto;
        z-index: 2;
      }

      h1 {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-82%, -50%);
        font-size: 86px;
        font-weight: bolder;
        z-index: 1;
        width: 100px;
        text-align: center;
        opacity: 0.2;
      }
    }
  }
`;

const TeamsTable = props => {
  return (
    <Wrapper newcup={props.newcup} column={props.column}>
      {props.children}
    </Wrapper>
  );
};

export default TeamsTable;
